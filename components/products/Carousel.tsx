'use client'
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  children: React.ReactNode;
}

export const ProductCarousel: React.FC<CarouselProps> = ({ children }) => {
  const swiperRef = useRef<SwiperType>(null);

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className="relative mr-0 md:-mr-4 lg:-mr-12 xl:-mr-32">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1.8}
        slidesPerGroup={1}
        breakpoints={{
          640: {
            slidesPerView: 2.3,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4.2,
            spaceBetween: 24,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="!pb-2 !pr-4 md:!pr-8 lg:!pr-12"
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-12 h-12 rounded-full bg-[#C4A68C] hover:bg-[#B5977D] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};