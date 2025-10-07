'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StarIcon } from "./StarIcon";
import { StarRating } from "./StarRating";
import Image from "next/image";

const ratingData = [
  { stars: 5, percentage: 67 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 6 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 9 },
];

const reviews = [
  {
    id: 1,
    name: "Alex Daewn",
    rating: 4,
    time: "4 months ago",
    comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed"
  },
  {
    id: 2,
    name: "Alex Daewn",
    rating: 4,
    time: "4 months ago",
    comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed"
  },
  {
    id: 3,
    name: "Alex Daewn",
    rating: 4,
    time: "4 months ago",
    comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed"
  },
  {
    id: 4,
    name: "Alex Daewn",
    rating: 4,
    time: "4 months ago",
    comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed"
  },
  {
    id: 5,
    name: "Alex Daewn",
    rating: 3,
    time: "4 months ago",
    comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed"
  },
  {
    id: 6,
    name: "Alex Daewn",
    rating: 1,
    time: "4 months ago",
    comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed"
  },
  {
    id: 7,
    name: "Alex Daewn",
    rating: 2,
    time: "4 months ago",
    comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed"
  },
];


export default function RatingReviews() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 4);

  return (
  <section >
    <div className="container mx-auto px-4 py-6 relative">
    <Image className="absolute bottom-10 left-0 w-[98px] h-[57px]" src="/images/icons/logobackground.png" alt="Review Background" width={98} height={57}/>
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">Rating & Reviews</h2>
    <div className="w-16 h-1 bg-[#C4A68C]"></div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
    <div className="lg:col-span-8">
      <div className="flex items-start md:items-center justify-center flex-col md:flex-row gap-12">
        <div className="text-center w-full md:w-auto">
          <div className="text-[120px] font-bold leading-none mb-2">4,5 <span className="text-muted-foreground text-3xl">/5</span></div>
        </div>
        <div className="flex-1 space-y-3 w-full md:w-auto">
          {ratingData.map((item) => (
            <div key={item.stars} className="flex items-center gap-4">
              <StarIcon filled={true} size={24} />
              <span className="text-xl font-medium w-4">{item.stars}</span>
              <div className="flex-1 h-2 bg-background rounded-full overflow-hidden relative min-w-0">
                <div 
                  className="h-full bg-primary-foreground rounded-full transition-all absolute top-0 left-0"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-xl font-medium text-gray-600 w-12 text-right">%{item.percentage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="lg:col-span-4 flex flex-col items-center justify-between gap-4 text-center">
      <p className="text-muted-foreground font-semibold">Total Reviews</p>
      <div className="text-6xl font-bold">3.0K</div>
      <Button 
        className="bg-primary-foreground hover:bg-[#B5977D] text-white px-8 py-8 rounded-lg text-base font-medium flex items-center gap-2"
      >
        Add Comment
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 11.6667V6.66667C17.5 3.33334 16.25 1.66667 12.5 1.66667H7.5C3.75 1.66667 2.5 3.33334 2.5 6.66667V13.3333C2.5 16.6667 3.75 18.3333 7.5 18.3333H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.1667 15H18.3334" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16.25 17V13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M13.3333 10H13.3408" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.99667 10H10.0042" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.66 10H6.66833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Button>
    </div>
  </div>

  <div className="space-y-10">
    {displayedReviews.map((review, index) => (
      <div key={review.id}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center justify-center gap-4">
            <h3 className="font-bold mb-0 text-lg">{review.name}</h3>
            <StarRating rating={review.rating} />
          </div>
          <span className="text-gray-500 text-sm">{review.time}</span>
        </div>
        <p className="font-medium text-lg leading-relaxed mb-6">
          {review.comment}
        </p>
        {index < displayedReviews.length - 1 && <Separator className="my-8" />}
      </div>
    ))}
  </div>

  {reviews.length > 4 && (
    <div className="flex justify-center mt-12">
      <button 
        onClick={() => setShowAllReviews(!showAllReviews)}
        className="text-primary-foreground bg-muted px-8 py-4 rounded-xl font-medium transition-colors"
      >
        {showAllReviews ? "Show Less Comments" : "View More Comments"}
      </button>
    </div>
  )}
</div></section>
  );
}
