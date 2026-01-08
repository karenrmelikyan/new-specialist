export default function getProductSEO(product, localization = 'hy') {
    if (localization === 'ru') {
        return {
            title: `${product.h1} - Specialist`,
            description: `Закажите ${product.h1} в сервисном центре Specialist с рейтингом ⭐4.9/5. Только оригинальные запасные части, высокое качество облсуживания и быстрота отклика.`,
        }
    } else {
        return {
            title: `${product.h1} - Specialist`,
            description: `Պատվիրեք ${product.h1} Specialist - սերվիս կենտրոնում ⭐4.9/5 վարկանիշով. Միայն օրիգինալ պահեստամասեր, բարձրակարգ սպասարկում և արագ արձագանք:`,
        }
    }
}
  