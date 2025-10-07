'use client'
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

const productImages = [
  "/images/products/blueshirt.png",
  "/images/products/whiteshirt.png",
  "/images/products/redshirt.png",
  "/images/products/blueshirt.png",
];

const thumbnails = [
    "/images/products/blueshirt.png",
    "/images/products/whiteshirt.png",
    "/images/products/redshirt.png",
];

const colors = [
  { name: "Red", value: "#DC2626", hex: "red" },
  { name: "Blue", value: "#93C5FD", hex: "blue" },
  { name: "Olive", value: "#A3A380", hex: "olive" },
  { name: "Sky", value: "#7DB8D6", hex: "sky" },
  { name: "Gray", value: "#6B7280", hex: "gray" },
];

export default function ProductDetails() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [quantity, setQuantity] = useState(1);
  const [selectedType, setSelectedType] = useState("Cotton");
  const [selectedSize, setSelectedSize] = useState("2Xl");

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="container mx-auto px-4 pt-8 pb-24 relative">
    <Image className="absolute bottom-10 left-0 w-[98px] h-[57px]" src="/images/icons/logobackground.png" alt="Review Background" width={98} height={57}/>
    <div className="grid grid-cols-1 lg:grid-cols-20 gap-8">
        <div className="space-y-4 col-span-1 md:col-span-9">
        <div 
  className="relative bg-background rounded-2xl overflow-hidden h-[450px] sm:h-[500px] md:h-[520px] lg:h-[600px]"
>

            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none" />
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-20 py-2 rounded-full">
              {productImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all ${
                    index === currentImage 
                      ? 'w-20 md:w-30 bg-white' 
                      : 'w-20 md:w-30 bg-white/50'
                  }`}
                />
              ))}
            </div>

            <div className="absolute inset-0 pt-12 pb-4 px-4">
              <div className="relative w-full h-full">
              <Image
  src={productImages[currentImage]}
  alt="Product"
  fill
  className="object-scale-down object-bottom mx-auto"
/>

              </div>
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-background hover:bg-primary-foreground flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white rotate-180" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary-foreground hover:bg-background flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {thumbnails.map((thumb, index) => (
           <div
           key={index}
           className={`relative aspect-square bg-white rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
             currentImage === index ? 'border-pink-500' : 'border-gray-200'
           }`}
           onClick={() => setCurrentImage(index)}
         >
              <Image
  src={thumb}
  alt={`Thumbnail ${index + 1}`}
  fill
  className="object-contain p-2"
/>

                {index === 2 && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">+2</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 col-span-1 md:col-span-11">
          <div className="flex items-start justify-between mb-1">
            <Badge variant="outline" className="text-md rounded-full text-primary-foreground">
              T-Shirt
            </Badge>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <ShoppingBag className="w-7 h-7" color={"#C4A68C"} />
              </button>
              <button className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <Heart className="w-7 h-7" color={"#C4A68C"} />
              </button>
            </div>
          </div>

          <div className="w-4/5 mb-2">
            <h5 className="text-[27px] font-semibold mb-1">
              J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
            </h5>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">$300.00</span>
              <span className="text-xl text-gray-400 line-through">$360.00</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">This price is exclusive of taxes.</p>
          </div>

          <p className="leading-relaxed mb-0 font-regular text-[17px]">
          Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy
          </p>
          <Separator className="my-6"/>
<div className="relative w-full md:max-w-xs">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700 z-10">Type</label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full h-11 bg-white border border-muted-foreground rounded-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Cotton">Cotton</SelectItem>
                <SelectItem value="Polyester">Polyester</SelectItem>
                <SelectItem value="Blend">Blend</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative w-full md:max-w-xs ">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700 z-10">Size</label>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full h-11 bg-white border border-muted-foreground rounded-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="S">S</SelectItem>
                <SelectItem value="M">M</SelectItem>
                <SelectItem value="L">L</SelectItem>
                <SelectItem value="Xl">Xl</SelectItem>
                <SelectItem value="2Xl">2Xl</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 md:my-12 mt-4">
            <label className="text-xl font-semibold block mb-8">Colors</label>
            <div className="flex justify-center md:justify-start gap-4 md:gap-8">
              {colors.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => setSelectedColor(color.hex)}
                  className="relative group"
                >
                  <div
                    className={`w-12 h-12 rounded-full border-8 border-[#F4F7F9] transition-all ${
                      selectedColor === color.hex
                        ? 'ring-2 ring-black ring-offset-2'
                        : ''
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                Quantity <span className="text-gray-400">($300.00 for Piece)</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-8 md:gap-24">
           <div className="flex gap-4">   <div className="flex items-center p-2 bg-background rounded-lg">
                <Button

                  onClick={decreaseQuantity}
                  className="w-12 h-12 flex items-center bg-white text-black justify-center hover:bg-background"
                >
                  <span className="text-3xl">−</span>
                </Button>
                <div className="w-16 h-12 flex items-center justify-center">
                  <span className="text-2xl font-medium">{quantity.toString().padStart(2, '0')}</span>
                </div>
                <Button
               
                
                  onClick={increaseQuantity}
                  className="w-12 h-12 flex items-center bg-white text-black justify-center hover:bg-background"
                >
                  <span className="text-3xl flex items-center justify-center">+</span>
                </Button>
              </div>
              <div className="flex-1 flex items-center justify-center px-6">
                <span className="text-3xl font-semibold">${(300 * quantity).toFixed(2)}</span>
              </div></div>
              <Button 
                className="flex-1 h-16 bg-primary-foreground hover:bg-[#B5977D] text-white rounded-lg text-xl font-medium"
              >
                Add To Cart
                <ShoppingBag className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}