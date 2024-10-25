export const PRODUCT_CATEGORIES = [
  {
    label: 'web design',
    value: 'web_design' as const,
    featured: [
      {
        name: 'eh',
        href: '/products?category=web_design',
        imageSrc: '/hey.jpg',
      },
    ],
  },
  {
    label: 'web dev',
    value: 'web_dev' as const,
    featured: [
      {
        name: 'eh',
        href: '/products?category=web_dev',
        imageSrc: '/art.jpg',
      },
    ],
  },
  // {
  //   label: 'Icons',
  //   value: 'icons' as const,
  //   featured: [
  //     {
  //       name: 'Favorite Icon Picks',
  //       href: `/products?category=icons`,
  //       imageSrc: '/nav/icons/picks.jpg',
  //     },
  //     {
  //       name: 'New Arrivals',
  //       href: '/products?category=icons&sort=desc',
  //       imageSrc: '/nav/icons/new.jpg',
  //     },
  //     {
  //       name: 'Bestselling Icons',
  //       href: '/products?category=icons',
  //       imageSrc: '/nav/icons/bestsellers.jpg',
  //     },
  //   ],
  // },
]
