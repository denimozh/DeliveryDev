export const Links = [
    { id: 1, title: "Home", url: "/"},
    { id: 2, title: "Menu", url: "/"},
    { id: 3, title: "Delivery", url: "/"},
    { id: 1, title: "Contact", url: "/"},
]

type Product = {
    id: number;
    title: string;
    desc: string;
    weight: string;
    img: string;
    price: number;
    protiens?: number;
    imgStyle?: string;
    fat?: number;
    carbs?: number,
    calories?: number,
    addOn?: { title: string; additionalPrice: number }[];
  };

type Products = Product[];

export const ramen: Products = [
    {
        id: 1,
        title: 'MISO RAMEN WITH SHRIMP',
        desc: 'Wheat noodles, shrimp, sweet pepper, baby corn, peas in pods, Curry Sauce, Asian Pesto Sauce, aromatic oil, Tom Yam broth',
        weight: '645g',
        img: '/misoShrimp-product.png',
        price: 24,
        protiens: 6.2,
        fat: 8.3,
        carbs: 28.6,
        calories: 213.7,
        addOn:[
            {
                title: "onion",
                additionalPrice: 0
            },
            {
                title: "pepper",
                additionalPrice: 1
            },
            {
                title: "greenery",
                additionalPrice: 2
            },
            {
                title: "sesame",
                additionalPrice: 1
            },
            {
                title: "bread",
                additionalPrice: 1
            },
            {
                title: "shrimp",
                additionalPrice: 2
            }
        ]
    },
    {
        id: 2,
        title: 'MISO RAMEN WITH CHICKEN',
        desc: 'Wheat noodles, chicken, sweet pepper, mushrooms, peas in pods, Curry Sauce, Asian Pesto Sauce, aromatic oil, Tom Yam broth',
        weight: '724g',
        img: '/misoChicken-product.png',
        imgStyle: 'scale-[1.15]',
        price: 32,
        protiens: 8.1,
        fat: 5.4,
        carbs: 32.6,
        calories: 341.4,
        addOn:[
            {
                title: "onion",
                additionalPrice: 0
            },
            {
                title: "pepper",
                additionalPrice: 1
            },
            {
                title: "greenery",
                additionalPrice: 2
            },
            {
                title: "sesame",
                additionalPrice: 1
            },
            {
                title: "bread",
                additionalPrice: 1
            },
            {
                title: "shrimp",
                additionalPrice: 2
            }
        ]
    },
    {
        id: 3,
        title: 'MISO RAMEN WITH PORK',
        desc: 'Wheat noodles, Pork, chili pepper, hot sauce, peas in pods, Curry Sauce, Asian Pesto Sauce, aromatic oil, Tom Yam broth',
        weight: '645g',
        img: '/misoPork-product.png',
        imgStyle: 'scale-[1.15]',
        price: 30,
        protiens: 9.2,
        fat: 5.3,
        carbs: 21.6,
        calories: 432.2,
        addOn:[
            {
                title: "onion",
                additionalPrice: 0
            },
            {
                title: "pepper",
                additionalPrice: 1
            },
            {
                title: "greenery",
                additionalPrice: 2
            },
            {
                title: "sesame",
                additionalPrice: 1
            },
            {
                title: "bread",
                additionalPrice: 1
            },
            {
                title: "shrimp",
                additionalPrice: 2
            }
        ]
    },
    {
        id: 4,
        title: 'SPICY DANDAN RAMEN NOODLES',
        desc: 'Dandan noodles, Chicken, chili pepper, hot sauce, Curry Sauce, Asian Pesto Sauce, aromatic oil, hot chicken broth',
        weight: '497g',
        img: '/danDan-product.png',
        imgStyle: 'scale-[1.15]',
        price: 28,
        protiens: 5.4,
        fat: 8.3,
        carbs: 31.6,
        calories: 543.2,
        addOn:[
            {
                title: "onion",
                additionalPrice: 0
            },
            {
                title: "pepper",
                additionalPrice: 1
            },
            {
                title: "greenery",
                additionalPrice: 2
            },
            {
                title: "sesame",
                additionalPrice: 1
            },
            {
                title: "bread",
                additionalPrice: 1
            },
            {
                title: "shrimp",
                additionalPrice: 2
            }
        ]
    },
    {
        id: 5,
        title: 'SHOYU STYLE CHICKEN RAMEN',
        desc: 'Shoyu noodles, Shoyu Styled Chicken, chili pepper, hot sauce, Curry Sauce, Asian Pesto Sauce, aromatic oil, hot chicken broth',
        weight: '497g',
        img: '/shoyuStyleRamen-product.png',
        imgStyle: 'scale-[1.15]',
        price: 35,
        protiens: 9.4,
        fat: 6.3,
        carbs: 23.6,
        calories: 621.2,
        addOn:[
            {
                title: "onion",
                additionalPrice: 0
            },
            {
                title: "pepper",
                additionalPrice: 1
            },
            {
                title: "greenery",
                additionalPrice: 2
            },
            {
                title: "sesame",
                additionalPrice: 1
            },
            {
                title: "bread",
                additionalPrice: 1
            },
            {
                title: "shrimp",
                additionalPrice: 2
            }
        ]
    },
    {
        id: 6,
        title: 'VEGAN FIRECRACK SPICED RAMEN',
        desc: 'Wheat noodles, spiced vegitables, chili pepper, hot sauce, Curry Sauce, Asian Pesto Sauce, aromatic oil, hot chicken broth',
        weight: '497g',
        img: '/veganRamen-product.png',
        imgStyle: 'scale-[1.15]',
        price: 31,
        protiens: 2.3,
        fat: 4.3,
        carbs: 17.6,
        calories: 311.2,
        addOn:[
            {
                title: "onion",
                additionalPrice: 0
            },
            {
                title: "pepper",
                additionalPrice: 1
            },
            {
                title: "greenery",
                additionalPrice: 2
            },
            {
                title: "sesame",
                additionalPrice: 1
            },
            {
                title: "bread",
                additionalPrice: 1
            },
            {
                title: "shrimp",
                additionalPrice: 2
            }
        ]
    }
]