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
    window.location.href = url
}

/**
 * Main fetch function
 * 
 * @param {*} param
 * @returns 
 */
async function requestTo({ 
    url, 
    data = {}, 
    method = 'POST', 
}) {
    const loader = document.getElementById('loader')
    if (loader) loader.style.display = 'block'

    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: method.toUpperCase() !== 'GET' ? JSON.stringify(data) : null,
        })

        const responseText = await response.text()

        return responseText
    } catch (err) {
        console.error('Fetch error:', err)
        throw err
    } finally {
        if (loader) loader.style.display = 'none'
    }
}

/**
 * Sanitizing armenian phone numbers
 * 
 * @param {*} input 
 * @returns 
 */
function getNormalizedArmenianPhoneNumber(input) {
    if (typeof input !== 'string') return null
  
    // Remove all non-digit characters
    let digits = input.replace(/\D/g, '')
  
    // Remove leading 0 if present (e.g., 093316461 → 93316461)
    if (digits.length === 8 && digits.startsWith('0')) {
        digits = digits.slice(1)
    }
  
    // Case 1: Already in full format (e.g., 37493316461)
    if (digits.length === 11 && digits.startsWith('374')) {
        const localPart = digits.slice(3)
        if (localPart.length === 8) return '+374' + localPart
    }
  
    // Case 2: Local format (e.g., 93316461)
    if (digits.length === 8) {
        return '+374' + digits
    }
  
    // Case 3: Mistakenly passed 9 digits starting with 9X (e.g., 093316461)
    if (digits.length === 9 && digits.startsWith('0')) {
        return '+374' + digits.slice(1)
    }
  
    return null
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
