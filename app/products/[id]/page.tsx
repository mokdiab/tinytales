import BreadcrumbNav from "@/components/products/Breadcrumb";
import ProductDetailsHero from "@/components/products/hero";
import ProductDetails from "@/components/products/ProductDetails";
import ReviewSection from "@/components/products/ReviewSection";
import SimilarItems from "@/components/products/SimilarItems";
export default function ProductPage() {
    return <>
        <ProductDetailsHero />
        <BreadcrumbNav />
        <ProductDetails />
        <ReviewSection />
        <SimilarItems />
    </>
}