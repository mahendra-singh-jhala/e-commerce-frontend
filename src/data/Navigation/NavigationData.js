export const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '/',
                    imageSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/q/g/-original-imagmh86zacftnyd.jpeg?q=70',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '/',
                    imageSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/dress/4/p/u/xl-120tkr2664-selvia-original-imafzagghj6fbfdj-bb.jpeg?q=70',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', id: "top", href: `{women/clothing/tops}` },
                        { name: 'Dresses', id: "women_dress", href: '#' },
                        { name: 'Women Jeans', id: 'women_jeans' }
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', id: 'watch' },
                        { name: 'Wallets', id: 'wallet' },
                        { name: 'Bags', id: 'bag' }
                    ],
                }
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    id: '#',
                    imageSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    id: '#',
                    imageSrc: 'https://rukminim1.flixcart.com/image/612/612/kxrvi4w0/shirt/v/k/d/38-pesfoslb493283-peter-england-original-imaga5p5shuyv6u5.jpeg?q=70',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Mens Kurtas', id: 'mens_kurta' },
                        { name: 'Shirt', id: 'shirt' },
                        { name: 'Men Jeans', id: 'men_jeans' }
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', id: 'mens_watchs' },
                        { name: 'Wallets', id: 'mens_wallets' },
                        { name: 'Bags', id: 'mens_bags' }
                    ],
                }
            ],
        },
    ],
    pages: [
        { name: 'Company', id: '/' },
        { name: 'Stores', id: '/' },
    ],
}