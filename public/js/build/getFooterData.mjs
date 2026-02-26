export default function getFooterData (services, districts) {
    const result = []

    // 1. Generate all possible combinations
    services.forEach(service => {
        districts.forEach(district => {
        result.push(`${service} ${district}`);
        });
    });

    // 2. Shuffle the array (Fisher-Yates algorithm)
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result
}