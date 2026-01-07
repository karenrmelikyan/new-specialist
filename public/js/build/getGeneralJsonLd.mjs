export default function getGeneralJsonLd(ENV) {
	return [
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": ENV.TYPE, 
					"@id": ENV.HOST + "#organization",
					"name": ENV.BRAND,
					"url": ENV.HOST,
					"description": ENV.SLOGAN_DESCRIPTION,
					"address": {
						"@type": "PostalAddress",
						"addressLocality": ENV.LOCALITY,
						"streetAddress": ENV.STREET_ADDRESS,
						"postalCode": ENV.POSTAL_CODE,
						"addressCountry": ENV.COUNTRY
					},
					"aggregateRating": {
						"@type": "AggregateRating",
						"ratingValue": ENV.RATING,
						"reviewCount": ENV.REVIEW_COUNT
					},
					"sameAs": [ENV.GOOGLE_URL]
				},
				{
					"@type": "WebSite",
					"@id": ENV.HOST + "#website",
					"name": ENV.SLOGAN_TITLE,
					"url": ENV.HOST,
					"publisher": {
						"@id": ENV.HOST + "#organization"
					}
				}
			]
		}
	]
}
