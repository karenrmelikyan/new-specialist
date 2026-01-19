GLOBAL_API_HOST = 'https://specialists.am/api'
// GLOBAL_API_HOST = 'http://localhost:8000/api'

/**
 * Init the JS after DOM loading
 * 
 * 
 */
document.addEventListener("DOMContentLoaded", function () {
    initLazyImagesLoader()
    initCopyrightYearInjection()
})


/**
 * Dynamic images loader
 * 
 * 
 */
function initLazyImagesLoader() {
    // Lazy load images using Intersection Observer
    const lazyImages = document.querySelectorAll("#image")

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target
                    const src = image.getAttribute("data-src")

                    if (src) {
                        const img = new Image()
                        img.onload = () => {
                            image.setAttribute("width", img.naturalWidth)
                            image.setAttribute("height", img.naturalHeight)
                            image.src = src
                        }
                        img.onerror = () => console.error("Failed to load image:", src)
                        img.src = src
                    }

                    observer.unobserve(image) // Stop observing once loaded
                }
            })
        })

        lazyImages.forEach(img => observer.observe(img))
    } else {
        // Fallback for older browsers
        lazyImages.forEach(image => {
            const src = image.getAttribute("data-src")
            if (src) image.src = src
        })
    }
}


/**
 * Injecting year to footer
 * 
 * 
 */
function initCopyrightYearInjection() {
    document.getElementById("year").textContent = new Date().getFullYear()
}


/**
 * 
 * @param {*} url 
 */
function goToURL(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}


/**
 * Change localization dynamicaly
 * by current URL 
 * 
 * 
 */
function changeLocalizationByCurrentURL() {
    const currentUrl = window.location.href
    const url = new URL(currentUrl)
    const pathname = url.pathname
  
    if (pathname.includes('/ru/')) {
        const newPathname = pathname.replace('/ru/', '/')
        url.pathname = newPathname
    } else {
        const newPathname = '/ru' + pathname
        url.pathname = newPathname
    }
  
    window.location.href = url.href
}
