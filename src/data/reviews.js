const reviewsData = [ 
    {
      "id": 1,
      "Name": "Sarah Jenkins",
      "review": "Absolutely love the Ethiopian Yirgacheffe! Rich, fruity notes that make my mornings magical. Fast shipping too!",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 2,
      "Name": "Mike Thompson",
      "review": "The house blend is smooth and bold—perfect for my French press. Packaging was eco-friendly, which I appreciate.",
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 3,
      "Name": "Emily Rodriguez",
      "review": "Decaf options are surprisingly flavorful. No bitterness here! Will be a repeat customer for sure.",
      "image": "Angelina Jolie.jpeg"
    },
    {
      "id": 4,
      "Name": "David Kim",
      "review": "Great variety in single-origin beans. The Colombian was a hit with my espresso machine. Highly recommend!",
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 5,
      "Name": "Lisa Patel",
      "review": "Subscription service is a game-changer. Fresh beans delivered monthly—my coffee ritual is elevated!",
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 6,
      "Name": "Alex Rivera",
      "review": "The dark roast has that perfect smoky edge. Arrived quickly, and the aroma was incredible unboxing.",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 7,
      "Name": "Jessica Lee",
      "review": "Best online coffee shop I've tried. The tasting notes guide helped me pick the right blend for iced lattes.",
      "image": "Girl12.jpeg"
    },
    {
      "id": 8,
      "Name": "Tom Wilson",
      "review": "Solid medium roast—balanced and versatile. Minor issue with one bag's seal, but customer service fixed it fast.",
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 9,
      "Name": "Rachel Green",
      "review": "Organic selection is top-notch. The Sumatra Mandheling is bold and earthy—my new favorite pour-over.",
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 10,
      "Name": "Chris Evans",
      "review": "Affordable prices for such quality. The gift set was beautifully packaged for my coffee-loving friend.",
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 11,
      "Name": "Anna Martinez",
      "review": "Light roast fans, rejoice! Bright and citrusy without being acidic. Delivery was on point.",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 12,
      "Name": "Brian Scott",
      "review": "The espresso blend packs a punch. Consistent grind quality—makes my home barista dreams come true.",
      "image": "Boy15.jpeg"
    },
    {
      "id": 13,
      "Name": "Sophia Wong",
      "review": "Eco-conscious packaging and fair-trade beans? Yes please. The Kenyan AA is exceptionally clean and vibrant.",
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 14,
      "Name": "Kevin Brooks",
      "review": "Tried the sampler pack—loved discovering new origins. All were fresh and full-bodied.",
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 15,
      "Name": "Maria Lopez",
      "review": "Smooth decaf that doesn't taste like decaf. Perfect for evenings. Super happy with the purchase!",
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 16,
      "Name": "James Taylor",
      "review": "Bold flavors in every sip. The Brazilian is nutty and chocolatey—ideal for cold brew.",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 17,
      "Name": "Olivia Chen",
      "review": "Website is user-friendly, and the beans arrived vacuum-sealed. The Guatemalan was a revelation!",
      "image": "Woman2.jpeg"
    },
    {
      "id": 18,
      "Name": "Daniel Foster",
      "review": "Great value for single-serve pods. Compatible with my machine and tastes like cafe quality.",
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 19,
      "Name": "Emma Davis",
      "review": "The floral notes in the Hawaiian Kona are divine. Shipping was free over $50—bonus!",
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 20,
      "Name": "Ryan Mitchell",
      "review": "Robust dark roast for my drip coffee maker. No complaints—consistent and delicious.",
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 21,
      "Name": "Grace Adams",
      "review": "Loved the seasonal blend—spiced and warm for fall. Easy reorder process.",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 22,
      "Name": "Noah Harris",
      "review": "Premium beans at fair prices. The Costa Rican Tarrazu is bright and juicy—5 stars!",
      "image": "Boy7.jpeg"
    },
    {
      "id": 23,
      "Name": "Ava Turner",
      "review": "Allergy-friendly options available. The herbal infusions pair well with their coffees.",
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 24,
      "Name": "Lucas Bell",
      "review": "Freshness guaranteed, and it shows. The Rwandan is complex with berry undertones.",
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 25,
      "Name": "Isabella Clark",
      "review": "Perfect for gifting—the custom labels add a personal touch. Recipient raved about the taste.",
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 26,
      "Name": "Ethan Lewis",
      "review": "Medium-dark roast hits the spot. Quick delivery and tracking updates were helpful.",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 27,
      "Name": "Mia Walker",
      "review": "The app makes browsing easy. Snagged a deal on the Mexican Chiapas—smooth and sweet.",
      "image": "Girl3.jpeg"
    },
    {
      "id": 28,
      "Name": "Caleb Hall",
      "review": "Whole bean option grinds beautifully. The Tanzanian Peaberry is unique and worth trying.",
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 29,
      "Name": "Sophia Young",
      "review": "Sustainable sourcing shines through. Light roast for my Aeropress—clean and crisp.",
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      "id": 30,
      "Name": "Owen King",
      "review": "Espresso-grade beans delivered fresh. The Italian-style blend crema is spot-on. Love this platform!",
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
]
export {reviewsData};