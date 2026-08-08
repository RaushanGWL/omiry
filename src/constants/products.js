// src/constants/products.js

export const PRODUCTS = [
  {
    id: 1,
    name: 'Amethyst Ganesha',
    subtitle: 'Protection • Wisdom • Prosperity',
    price: 1450,
    image: '/assets/images/hero.png',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Rose Quartz Buddha',
    subtitle: 'Love • Harmony • Peace',
    price: 1250,
    image: '/assets/images/products/product_2_buddha_1786187507829.png',
    badge: 'Bestseller',
  },
  {
    id: 3,
    name: 'Lapis Lazuli Shiva Lingam',
    subtitle: 'Awakening • Truth • Inner Vision',
    price: 1600,
    image: '/assets/images/products/product_3_shiva_1786187521482.png',
    badge: 'New Arrival',
  },
  {
    id: 4,
    name: 'Jade Lakshmi',
    subtitle: 'Wealth • Abundance • Fortune',
    price: 1850,
    image: '/assets/images/products/product_4_lakshmi_1786187537042.png',
    badge: 'Limited Edition',
  },
  {
    id: 5,
    name: 'Clear Quartz Kwan Yin',
    subtitle: 'Compassion • Healing • Grace',
    price: 1550,
    image: '/assets/images/products/product_5_kwanyin_1786187550343.png',
  },
  {
    id: 6,
    name: 'Clear Quartz Tree',
    subtitle: 'Energy • Clarity • Growth',
    price: 980,
    image: '/assets/images/crystal_deity.png',
    badge: 'Bestseller',
  },
  {
    id: 7,
    name: 'Amethyst Meditation Buddha',
    subtitle: 'Calm • Intuition • Stillness',
    price: 1350,
    image: '/assets/images/products/product_2_buddha_1786187507829.png',
  },
  {
    id: 8,
    name: 'Lapis Lazuli Sacred Stone',
    subtitle: 'Wisdom • Focus • Power',
    price: 890,
    image: '/assets/images/products/product_3_shiva_1786187521482.png',
  },
  {
    id: 9,
    name: 'Jade Wealth Deity',
    subtitle: 'Prosperity • Balance • Luck',
    price: 1750,
    image: '/assets/images/products/product_4_lakshmi_1786187537042.png',
  },
  {
    id: 10,
    name: 'Clear Quartz Healing Figure',
    subtitle: 'Purification • Light • Serenity',
    price: 1400,
    image: '/assets/images/products/product_5_kwanyin_1786187550343.png',
    badge: 'New Arrival',
  },
  {
    id: 11,
    name: 'Amethyst Wisdom Ganesha',
    subtitle: 'Success • Guidance • Peace',
    price: 1500,
    image: '/assets/images/hero.png',
  },
  {
    id: 12,
    name: 'Rose Quartz Harmony Buddha',
    subtitle: 'Heart Chakra • Love • Joy',
    price: 1150,
    image: '/assets/images/products/product_2_buddha_1786187507829.png',
  },
  {
    id: 13,
    name: 'Lapis Spiritual Lingam',
    subtitle: 'Meditation • Cosmic Energy',
    price: 1650,
    image: '/assets/images/products/product_3_shiva_1786187521482.png',
  },
  {
    id: 14,
    name: 'Jade Blessing Lakshmi',
    subtitle: 'Grace • Elegance • Devotion',
    price: 1950,
    image: '/assets/images/products/product_4_lakshmi_1786187537042.png',
    badge: 'Limited Edition',
  },
  {
    id: 15,
    name: 'Quartz Compassion Deity',
    subtitle: 'Protection • Kindness • Spirit',
    price: 1600,
    image: '/assets/images/products/product_5_kwanyin_1786187550343.png',
  },
  {
    id: 16,
    name: 'Master Quartz Tree',
    subtitle: 'Vitality • Strength • Rebirth',
    price: 1100,
    image: '/assets/images/crystal_deity.png',
    badge: 'Bestseller',
  },
];

/**
 * Format a price number to display string e.g. 1450 → "$1,450.00"
 * @param {number} price
 * @returns {string}
 */
export const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
