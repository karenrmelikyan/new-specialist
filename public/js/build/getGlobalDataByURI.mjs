export default function getGlobalDataByURI(URI) {
    const prices = [
        { id: "/lvacqi-meqenaneri-veranorogum/", value: "10.000" },
        { id: "/sarnaranneri-veranorogum/", value: "10.000" },
        { id: "/spasq-lvacoq-meqenaneri-veranorogum/", value: "15.000" },
        { id: "/avtomat-choranocneri-veranorogum/", value: "15.000" },
        { id: "/about/", value: "10.000" },
    ]

    const sources = [
        { id: "/lvacqi-meqenaneri-veranorogum/", value: "/assets/img/washer-service.webp" },
        { id: "/sarnaranneri-veranorogum/", value: "/assets/img/fridge-service.webp" },
        { id: "/spasq-lvacoq-meqenaneri-veranorogum/", value: "/assets/img/dishwasher-service.webp" },
        { id: "/avtomat-choranocneri-veranorogum/", value: "/assets/img/dryer-service.webp" },
        { id: "/about/", value: "/assets/img/master.webp" },
    ]
    
    const priceData = prices.find(item => URI.includes(item.id))
    const srcData = sources.find(item => URI.includes(item.id))

    return {
        price: priceData ? priceData.value : null,
        src: srcData ? srcData.value : null
    }
}