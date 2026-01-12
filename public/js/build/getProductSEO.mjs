export default function getProductSEO(title, localization = 'hy') {
    if (localization === 'ru') {
        return {
            title: `${title} | Specialist Ереван`,
            description: `${title}. Закажите ремонт в Ереване. Сервисная служба с рейтингом ⭐4.9/5. Гарантия, оригинальные запасные части, высокое качество облсуживания и быстрота отклика.`,
        }
    } else {
        return {
            title: `${title} | Specialist Երևան`,
            description: `${title}. Պատվիրեք վերանորոգում Երևանում: Կենցաղային ծառայություն ⭐4.9/5 վարկանիշով: Երաշխիք, օրիգինալ պահեստամասեր, բարձրորակ սպասարկում և արագ արձագանք։`,
        }
    }
}
