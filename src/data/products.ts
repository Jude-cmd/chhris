export interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  description: string;
}

const originalGalleryImages = [
  { src: "/IMG-20250924-WA0003.jpg", alt: "Clear Wonders Cream product 1" },
  { src: "/IMG-20250924-WA0005.jpg", alt: "Clear Wonders Cream product 2" },
  { src: "/IMG-20250924-WA0006.jpg", alt: "Clear Wonders Cream product 3" },
  { src: "/IMG-20250924-WA0007.jpg", alt: "Clear Wonders Cream product 4" },
  { src: "/IMG-20250924-WA0008.jpg", alt: "Clear Wonders Cream product 5" },
  { src: "/IMG-20250924-WA0009.jpg", alt: "Clear Wonders Cream product 6" },
  { src: "/IMG-20250924-WA0010.jpg", alt: "Clear Wonders Cream product 7" },
  { src: "/IMG-20250924-WA0011.jpg", alt: "Clear Wonders Cream product 8" },
  { src: "/IMG-20250924-WA0012.jpg", alt: "Clear Wonders Cream product 9" },
  { src: "/IMG-20250924-WA0013.jpg", alt: "Clear Wonders Cream product 10" },
  { src: "/IMG-20250924-WA0014.jpg", alt: "Clear Wonders Cream product 11" },
  { src: "/IMG-20250924-WA0015.jpg", alt: "Clear Wonders Cream product 12" },
  { src: "/IMG-20250924-WA0016.jpg", alt: "Clear Wonders Cream product 13" },
  { src: "/IMG-20250924-WA0017.jpg", alt: "Clear Wonders Cream product 14" },
  { src: "/IMG-20250924-WA0018.jpg", alt: "Clear Wonders Cream product 15" },
  { src: "/IMG-20250924-WA0019.jpg", alt: "Clear Wonders Cream product 16" },
  { src: "/IMG-20250924-WA0020.jpg", alt: "Clear Wonders Cream product 17" },
  { src: "/IMG-20250924-WA0021.jpg", alt: "Clear Wonders Cream product 18" },
  { src: "/IMG-20250924-WA0022.jpg", alt: "Clear Wonders Cream product 19" },
  { src: "/IMG-20250924-WA0023.jpg", alt: "Clear Wonders Cream product 20" },
  { src: "/IMG-20250924-WA0024.jpg", alt: "Clear Wonders Cream product 21" },
  { src: "/IMG-20250924-WA0025.jpg", alt: "Clear Wonders Cream product 22" },
  { src: "/IMG-20250924-WA0026.jpg", alt: "Clear Wonders Cream product 23" },
  { src: "/IMG-20250924-WA0027.jpg", alt: "Clear Wonders Cream product 24" },
  { src: "/IMG-20250924-WA0028.jpg", alt: "Clear Wonders Cream product 25" },
  { src: "/IMG-20250924-WA0029.jpg", alt: "Clear Wonders Cream product 26" },
  { src: "/IMG-20250924-WA0030.jpg", alt: "Clear Wonders Cream product 27" },
  { src: "/IMG-20250924-WA0031.jpg", alt: "Clear Wonders Cream product 28" },
  { src: "/IMG-20250924-WA0032.jpg", alt: "Clear Wonders Cream product 29" },
  { src: "/IMG-20250924-WA0033.jpg", alt: "Clear Wonders Cream product 30" },
  { src: "/IMG-20250924-WA0034.jpg", alt: "Clear Wonders Cream product 31" },
  { src: "/IMG-20250924-WA0035.jpg", alt: "Clear Wonders Cream product 32" },
  { src: "/IMG-20250924-WA0036.jpg", alt: "Clear Wonders Cream product 33" },
  { src: "/IMG-20250924-WA0037.jpg", alt: "Clear Wonders Cream product 34" },
  { src: "/IMG-20250924-WA0038.jpg", alt: "Clear Wonders Cream product 35" },
  { src: "/IMG-20250924-WA0039.jpg", alt: "Clear Wonders Cream product 36" },
  { src: "/IMG-20250924-WA0040.jpg", alt: "Clear Wonders Cream product 37" },
  { src: "/IMG-20250924-WA0041.jpg", alt: "Clear Wonders Cream product 38" },
  { src: "/IMG-20250924-WA0042.jpg", alt: "Clear Wonders Cream product 39" },
  { src: "/IMG-20250924-WA0043.jpg", alt: "Clear Wonders Cream product 40" },
  { src: "/IMG-20250924-WA0044.jpg", alt: "Clear Wonders Cream product 41" },
  { src: "/IMG-20250924-WA0045.jpg", alt: "Clear Wonders Cream product 42" },
  { src: "/IMG-20250924-WA0046.jpg", alt: "Clear Wonders Cream product 43" },
  { src: "/IMG-20250924-WA0047.jpg", alt: "Clear Wonders Cream product 44" },
  { src: "/IMG-20250924-WA0048.jpg", alt: "Clear Wonders Cream product 45" },
  { src: "/IMG-20250924-WA0049.jpg", alt: "Clear Wonders Cream product 46" },
  { src: "/IMG-20250924-WA0050.jpg", alt: "Clear Wonders Cream product 47" },
  { src: "/IMG-20250924-WA0051.jpg", alt: "Clear Wonders Cream product 48" },
  { src: "/IMG-20250924-WA0052.jpg", alt: "Clear Wonders Cream product 49" },
  { src: "/IMG-20250924-WA0053.jpg", alt: "Clear Wonders Cream product 50" },
  { src: "/IMG-20250924-WA0054.jpg", alt: "Clear Wonders Cream product 51" },
  { src: "/IMG-20250924-WA0055.jpg", alt: "Clear Wonders Cream product 52" },
  { src: "/IMG-20250924-WA0056.jpg", alt: "Clear Wonders Cream product 53" },
  { src: "/IMG-20250924-WA0057.jpg", alt: "Clear Wonders Cream product 54" },
  { src: "/IMG-20250924-WA0058.jpg", alt: "Clear Wonders Cream product 55" },
  { src: "/IMG-20250924-WA0059.jpg", alt: "Clear Wonders Cream product 56" },
  { src: "/IMG-20250924-WA0060.jpg", alt: "Clear Wonders Cream product 57" },
  { src: "/IMG-20250924-WA0061.jpg", alt: "Clear Wonders Cream product 58" },
  { src: "/IMG-20250924-WA0062.jpg", alt: "Clear Wonders Cream product 59" },
  { src: "/IMG-20250924-WA0063.jpg", alt: "Clear Wonders Cream product 60" },
  { src: "/IMG-20250924-WA0064.jpg", alt: "Clear Wonders Cream product 61" },
  { src: "/IMG-20250924-WA0065.jpg", alt: "Clear Wonders Cream product 62" },
  { src: "/IMG-20250924-WA0066.jpg", alt: "Clear Wonders Cream product 63" },
  { src: "/IMG-20250924-WA0067.jpg", alt: "Clear Wonders Cream product 64" },
  { src: "/IMG-20250924-WA0068.jpg", alt: "Clear Wonders Cream product 65" },
  { src: "/IMG-20250924-WA0069.jpg", alt: "Clear Wonders Cream product 66" },
  { src: "/IMG-20250924-WA0070.jpg", alt: "Clear Wonders Cream product 67" },
  { src: "/IMG-20250924-WA0071.jpg", alt: "Clear Wonders Cream product 68" },
  { src: "/IMG-20250924-WA0072.jpg", alt: "Clear Wonders Cream product 69" },
  { src: "/IMG-20250924-WA0073.jpg", alt: "Clear Wonders Cream product 70" },
  { src: "/IMG-20250924-WA0074.jpg", alt: "Clear Wonders Cream product 71" },
  { src: "/IMG-20250924-WA0075.jpg", alt: "Clear Wonders Cream product 72" },
  { src: "/IMG-20250924-WA0076.jpg", alt: "Clear Wonders Cream product 73" },
  { src: "/IMG-20250924-WA0077.jpg", alt: "Clear Wonders Cream product 74" },
  { src: "/IMG-20250924-WA0078.jpg", alt: "Clear Wonders Cream product 75" },
  { src: "/IMG-20250924-WA0079.jpg", alt: "Clear Wonders Cream product 76" },
  { src: "/IMG-20250924-WA0080.jpg", alt: "Clear Wonders Cream product 77" },
  { src: "/IMG-20250924-WA0081.jpg", alt: "Clear Wonders Cream product 78" },
  { src: "/IMG-20250924-WA0082.jpg", alt: "Clear Wonders Cream product 79" },
  { src: "/IMG-20250924-WA0083.jpg", alt: "Clear Wonders Cream product 80" },
  { src: "/IMG-20250924-WA0084.jpg", alt: "Clear Wonders Cream product 81" },
  { src: "/IMG-20250924-WA0085.jpg", alt: "Clear Wonders Cream product 82" },
  { src: "/IMG-20250924-WA0086.jpg", alt: "Clear Wonders Cream product 83" },
  { src: "/IMG-20250924-WA0087.jpg", alt: "Clear Wonders Cream product 84" },
  { src: "/IMG-20250924-WA0088.jpg", alt: "Clear Wonders Cream product 85" },
  { src: "/IMG-20250924-WA0089.jpg", alt: "Clear Wonders Cream product 86" },
  { src: "/IMG-20250924-WA0090.jpg", alt: "Clear Wonders Cream product 87" },
  { src: "/IMG-20250924-WA0091.jpg", alt: "Clear Wonders Cream product 88" },
  { src: "/IMG-20250924-WA0092.jpg", alt: "Clear Wonders Cream product 89" },
  { src: "/IMG-20250924-WA0093.jpg", alt: "Clear Wonders Cream product 90" },
  { src: "/IMG-20250924-WA0094.jpg", alt: "Clear Wonders Cream product 91" },
];

// Only include the first 15 products
const imagesToInclude = originalGalleryImages.slice(0, 15).map(image => image.src);

const descriptiveWords = [
  "Radiant", "Luminous", "Glowing", "Vibrant", "Nourishing", "Hydrating", "Revitalizing", "Rejuvenating",
  "Soothing", "Calming", "Gentle", "Pure", "Natural", "Silky", "Smooth", "Supple", "Soft", "Youthful",
  "Fresh", "Clean", "Exquisite", "Luxurious", "Divine", "Ethereal", "Sublime", "Enchanting", "Captivating",
  "Alluring", "Graceful", "Elegant", "Harmonious", "Balanced", "Serene", "Tranquil", "Invigorating",
  "Refreshing", "Uplifting", "Energizing", "Flawless", "Pristine", "Dreamy", "Blissful", "Joyful",
  "Wonderful", "Amazing", "Astonishing", "Miraculous", "Magical", "Brilliant", "Dazzling", "Shimmering",
  "Lustrous", "Resplendent", "Replenishing", "Restorative", "Enriching", "Delicate", "Tender", "Ageless",
  "Timeless", "Opulent", "Polished", "Refined", "Velvety", "Dewy", "Resilient", "Peaceful", "Splendid",
  "Glorious", "Superb", "Grand", "Magnificent", "Stellar", "Supreme", "Ultimate", "Precious", "Cherished",
  "Beloved", "Esteemed", "Valued", "Treasured", "Admired", "Revered", "Perfect", "Immaculate", "Happy"
];

export const products: Product[] = originalGalleryImages
  .filter(image => imagesToInclude.includes(image.src)) // Filter to only include the first 15
  .map((image, index) => {
    const productNumber = index + 1; // Use index + 1 for unique numbering
    const uniqueWord = descriptiveWords[index % descriptiveWords.length]; // Cycle through words if more products than words
    const descriptionTemplate = `This ${uniqueWord} Clear Wonders product is designed to bring radiance and nourishment to your skin. It features a unique blend of natural ingredients, carefully selected to provide optimal care and a delightful experience. Discover the magic of Clear Wonders with this amazing item!`;

    return {
      id: `product-${productNumber}`, // Unique ID for routing
      src: image.src,
      alt: `Clear Wonders product No ${productNumber}`,
      name: `Clear Wonders Product ${productNumber}`, // Now correctly numbered
      description: descriptionTemplate,
    };
  });