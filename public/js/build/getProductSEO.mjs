export default function getProductSEO(title, description, localization = 'hy') {
    if (localization === 'ru') {
        return {
            title: `${title} | Specialist Ереван`,
            description: `${description} - закажите ремонт в Ереване. Сервисная служба с рейтингом ⭐4.9/5. Гарантия, оригинальные запасные части, высокое качество облсуживания и быстрота отклика.`,
        }
    } else {
        return {
            title: `${title} | Specialist Երևան`,
            description: `${description} - պատվիրեք վերանորոգում Երևանում: Կենցաղային ծառայություն ⭐4.9/5 վարկանիշով: Երաշխիք, օրիգինալ պահեստամասեր, բարձրորակ սպասարկում և արագ արձագանք։`,
        }
    }
}
