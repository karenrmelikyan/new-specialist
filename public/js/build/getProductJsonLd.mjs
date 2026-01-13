export default function getProductJsonLd(title, description, src, price, ENV) {
    const priceValidUntil = new Date();
    priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
    const priceValidUntilStr = priceValidUntil.toISOString().split("T")[0]; // YYYY-MM-DD

    const reviews = ENV.REVIEWS.map((review, index) => ({
        "@type": "Review",
        "author": {
            "@type": "Person",
            "name": review.name || `Customer ${index + 1}`
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5", // defaulting to 5 stars for now
            "bestRating": "5"
        },
        "reviewBody": review.reviewBody || "Отличный продукт!"
    }))

    const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": title,
        "description": description,
        "image": src,
        "brand": {
            "@type": "Brand",
            "name": ENV.BRAND
        },
        "review": reviews,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": ENV.RATING,
            "bestRating": "5",
            "reviewCount": ENV.REVIEW_COUNT
        },
        "offers": {
            "@type": "Offer",
            "price": price,
            "priceCurrency": ENV.CURRENCY,
            "priceValidUntil": priceValidUntilStr,
            "availability": "https://schema.org/InStock",
            "url": ENV.HOST,
            "seller": {
                "@type": ENV.TYPE,
                "name": ENV.BRAND,
                "url": ENV.HOST,
                "sameAs": [ENV.YANDEX_URL]
            },
            "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0", // free shipping
                    "currency": ENV.CURRENCY
                },
                "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": ENV.COUNTRY
                },
                "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "handlingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 2,
                        "unitCode": "d"
                    },
                    "transitTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 3,
                        "unitCode": "d"
                    }
                }
            },
            "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": ENV.COUNTRY,
                "returnPolicyCategory": "https://schema.org/NoReturnPolicy"
            }
        }
    }

    return [productJsonLd]
}
