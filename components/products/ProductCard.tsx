'use client'
import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";
import { StarRating } from "./StarRating";
import { RiShoppingBag4Fill } from "react-icons/ri";

interface ProductColor {
  name: string;
  value: string;
}

interface ProductCardProps {
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  title: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: string;
  colors: ProductColor[];
  moreColors?: number;
  inStock?: boolean;
  isFavorite?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  category,
  rating,
  reviewCount,
  title,
  currentPrice,
  originalPrice,
  discount,
  colors,
  moreColors,
  inStock = false,
  isFavorite = false,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);

  return (
    <div className="bg-white rounded-lg  overflow-hidden  hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden">
       <div className={`absolute flex justify-between ${discount ? 'justify-between' : 'justify-end'} w-full top-3 z-10 px-2 md:px-4`}>
       {discount && (
          <div className="border flex items-center border-primary-foreground text-xs font-medium px-2.5 py-1 rounded-md z-10 text-primary-foreground">
            {discount}
          </div>
        )}
        
        <div className="flex gap-2">
          <button 
            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
              inStock 
                ? 'text-primary-foreground border-primary-foreground hover:bg-primary-foreground/80' 
                : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            {inStock ? (
                <RiShoppingBag4Fill className={`w-5 h-5 ${'text-primary-foreground'}`} />
            ) : (
                <ShoppingBag className={`w-5 h-5 ${'text-primary-foreground'}`} />
            )}
            
          </button>
          <button 
            onClick={() => setFavorite(!favorite)}
            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
              favorite 
                ? ' border-primary-foreground hover:bg-primary-foreground/80' 
                : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Heart className={`w-5 h-5 ${favorite ? 'text-primary-foreground fill-primary-foreground' : 'text-primary-foreground'}`} />
          </button>
        </div>
       </div>

        <div className="w-full rounded-lg border border-muted-forground h-full flex items-center justify-center p-6">
          <Image
            src={image}
            alt={title}
            width={280}
            height={280}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="p-2 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">{category}</span>
          <div className="flex items-center gap-1">
            <StarRating rating={1} maxStars={1} size={14} />
            <span className="text-sm font-medium text-muted-foreground">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
        </div>

        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[40px] leading-5">
          {title}
        </h3>

  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 justify-between mt-4">      <div className="flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">AED {currentPrice}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">AED {originalPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {colors.slice(0, 3).map((color, index) => (
            <button
              key={index}
              className="w-6 h-6 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-colors flex-shrink-0"
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
          {moreColors && (
            <span className="text-sm text-gray-600 font-medium">+{moreColors}</span>
          )}
        </div></div>
      </div>
    </div>
  );
};