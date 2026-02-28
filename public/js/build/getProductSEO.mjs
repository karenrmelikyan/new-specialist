export default function getProductSEO(title, description, localization = 'hy') {
    if (localization === 'ru') {
        return {
            title: getStrWithoutDuplicates(`${title} ремонт в Ереване | Specialist`),
            description: `${description} - закажите ремонт в Ереване. Сервисная служба с рейтингом ⭐4.9/5. Гарантия, оригинальные запасные части, высокое качество облсуживания и быстрота отклика.`,
        }
    } else {
        return {
            title: getStrWithoutDuplicates(`${title} վերանորոգում Երևանում | Specialist`),
            description: `${description} - պատվիրեք վերանորոգում Երևանում: Կենցաղային ծառայություն ⭐4.9/5 վարկանիշով: Երաշխիք, օրիգինալ պահեստամասեր, բարձրորակ սպասարկում և արագ արձագանք։`,
        }
    }
}

function getStrWithoutDuplicates(str) {
    const words = str.split(' ')
    const seenWords = new Set()
    const result = []

    for (const word of words) {
        const lowerWord = word.toLowerCase()

        if (!seenWords.has(lowerWord)) {
            seenWords.add(lowerWord)
            result.push(word)
        }
    }

    return result.join(' ')
}