import { ProductCard } from "@/components/products/ProductCard";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: "/images/products/blueshirt.png",
    category: "Clothing",
    rating: 4.5,
    reviewCount: 128,
    title: "Premium Blue Cotton Shirt",
    currentPrice: 89.99,
    originalPrice: 120.00,
    discount: "25% OFF",
    colors: [
      { name: "Blue", value: "#3B82F6" },
      { name: "Red", value: "#EF4444" },
      { name: "White", value: "#F3F4F6" }
    ],
    moreColors: 2,
    inStock: true,
    isFavorite: false,
  },
  {
    id: 2,
    image: "/images/products/redshirt.png",
    category: "Clothing",
    rating: 4.2,
    reviewCount: 95,
    title: "Classic Red Polo Shirt",
    currentPrice: 75.50,
    originalPrice: 95.00,
    discount: "20% OFF",
    colors: [
      { name: "Red", value: "#EF4444" },
      { name: "Blue", value: "#3B82F6" },
      { name: "Black", value: "#1F2937" }
    ],
    moreColors: 1,
    inStock: true,
    isFavorite: true,
  },
  {
    id: 3,
    image: "/images/products/whiteshirt.png",
    category: "Clothing",
    rating: 4.8,
    reviewCount: 203,
    title: "Elegant White Dress Shirt",
    currentPrice: 95.00,
    colors: [
      { name: "White", value: "#F3F4F6" },
      { name: "Light Blue", value: "#DBEAFE" },
      { name: "Gray", value: "#9CA3AF" }
    ],
    moreColors: 3,
    inStock: true,
    isFavorite: false,
  },
  {
    id: 4,
    image: "/images/products/similar1.png",
    category: "Accessories",
    rating: 4.3,
    reviewCount: 67,
    title: "Stylish Leather Watch",
    currentPrice: 199.99,
    originalPrice: 250.00,
    discount: "20% OFF",
    colors: [
      { name: "Brown", value: "#92400E" },
      { name: "Black", value: "#1F2937" }
    ],
    inStock: true,
    isFavorite: false,
  },
  {
    id: 5,
    image: "/images/products/similar2.png",
    category: "Electronics",
    rating: 4.6,
    reviewCount: 156,
    title: "Wireless Bluetooth Headphones",
    currentPrice: 149.99,
    originalPrice: 199.99,
    discount: "25% OFF",
    colors: [
      { name: "Black", value: "#1F2937" },
      { name: "White", value: "#F3F4F6" },
      { name: "Blue", value: "#3B82F6" }
    ],
    inStock: true,
    isFavorite: true,
  },
  {
    id: 6,
    image: "/images/products/similar3.png",
    category: "Home & Garden",
    rating: 4.4,
    reviewCount: 89,
    title: "Modern Desk Lamp",
    currentPrice: 79.99,
    colors: [
      { name: "White", value: "#F3F4F6" },
      { name: "Black", value: "#1F2937" }
    ],
    inStock: false,
    isFavorite: false,
  },
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
                    <p className="text-gray-600">Discover our amazing collection of products</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`}>
                            <ProductCard
                                image={product.image}
                                category={product.category}
                                rating={product.rating}
                                reviewCount={product.reviewCount}
                                title={product.title}
                                currentPrice={product.currentPrice}
                                originalPrice={product.originalPrice}
                                discount={product.discount}
                                colors={product.colors}
                                moreColors={product.moreColors}
                                inStock={product.inStock}
                                isFavorite={product.isFavorite}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}