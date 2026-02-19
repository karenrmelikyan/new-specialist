export default function getFilteredIssuesInRange(items, parentURL, start = 0, end = items.length) {
    const result = []

    // Safety clamp (very important)
    const safeStart = Math.max(0, start)
    const safeEnd = Math.min(end, items.length)

    for (let i = safeStart; i < safeEnd; i++) {
        const issue = items[i];

        if (issue.slugs?.length > 0) {
            result.push({
                title: issue.title,
                href: `${parentURL}${issue.slug}/`
            })
        }
    }

    return result
}