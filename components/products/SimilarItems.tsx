
import { ProductCard } from "./ProductCard";
import { ProductCarousel } from "./Carousel";
export default function SimilarItems() {
    const products = [
      {
        image: "/images/products/similar1.png",
        category: "Dresses",
        rating: 4.5,
        reviewCount: 2910,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
        currentPrice: 900,
        colors: [
          { name: "Beige", value: "#D4B5A0" },
          { name: "Black", value: "#000000" },
        ],
        moreColors: 2,
      },
      {
        image: "/images/products/similar2.png",
        category: "Dresses",
        rating: 4.5,
        reviewCount: 2910,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
        currentPrice: 900,
        originalPrice: 1300,
        discount: "25% OFF",
        colors: [
          { name: "Beige", value: "#D4B5A0" },
          { name: "Black", value: "#000000" },
        ],
        moreColors: 2,
      },
      {
        image: "/images/products/similar3.png",
        category: "Dresses",
        rating: 4.5,
        reviewCount: 2910,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
        currentPrice: 900,
        colors: [
          { name: "Brown", value: "#8B4513" },
          { name: "Navy", value: "#1E3A8A" },
          { name: "Green", value: "#047857" },
          { name: "Purple", value: "#7E22CE" },
        ],
        moreColors: 2,
        inStock: true,
        isFavorite: true,
      },
      {
        image: "/images/products/similar4.png",
        category: "Dresses",
        rating: 4.5,
        reviewCount: 2910,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
        currentPrice: 900,
        originalPrice: 1300,
        discount: "25% OFF",
        colors: [
          { name: "Pink", value: "#EC4899" },
          { name: "Black", value: "#000000" },
        ],
        moreColors: 2,
      },
      {
        image: "/images/products/similar5.png",
        category: "Dresses",
        rating: 4.5,
        reviewCount: 2910,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
        currentPrice: 900,
        originalPrice: 1300,
        discount: "25% OFF",
        colors: [
          { name: "Beige", value: "#D4B5A0" },
          { name: "Black", value: "#000000" },
        ],
        moreColors: 2,
      },
      {
        image: "/images/products/similar6.png",
        category: "Dresses",
        rating: 4.5,
        reviewCount: 2910,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
        currentPrice: 900,
        colors: [
          { name: "Red", value: "#DC2626" },
          { name: "Blue", value: "#2563EB" },
          { name: "Yellow", value: "#EAB308" },
        ],
        moreColors: 3,
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Similar Items</h2>
          <div className="w-16 h-1 bg-[#C4A68C]"></div>
        </div>
  
        <ProductCarousel>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </ProductCarousel>
      </div>
    );
  }