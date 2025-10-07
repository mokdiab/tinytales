'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { JSX } from "react";

interface BreadcrumbItemType {
    label: string;
    href?: string;
}

// Map routes to readable labels
const routeLabels: Record<string, string> = {
    "": "Home",
    "category": "Our Category",
    "about-us": "About Us",
    "contact-us": "Contact Us",
    "faqs": "FAQs",
    "product-details": "Product Details",
    "products": "Products",
    "cart": "Shopping Cart",
    "checkout": "Checkout",
    "account": "My Account",
};

export default function BreadcrumbNav(): JSX.Element {
    const pathname = usePathname();
    
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    
    const breadcrumbItems: BreadcrumbItemType[] = [
        { label: "Home", href: "/" }
    ];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        
        if (index === pathSegments.length - 1) {
            breadcrumbItems.push({ label });
        } else {
            breadcrumbItems.push({ label, href: currentPath });
        }
    });

    return (
        <nav className="bg-background container mx-auto py-5 rounded-xl my-3">
            <div className="mx-4 md:mx-10">
                <Breadcrumb>
                    <BreadcrumbList className="text-[14px] md:text-[20px] font-semibold">
                        {breadcrumbItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <BreadcrumbItem>
                                    {item.href ? (
                                        <BreadcrumbLink asChild className="text-[14px] md:text-[20px] text-primary font-semibold hover:text-muted-foreground">
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage className="text-[14px] md:text-[20px] text-muted-foreground font-semibold">
                                            {item.label}
                                        </BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                                {index < breadcrumbItems.length - 1 && (
                                    <BreadcrumbSeparator className="text-[14px] md:text-[20px] text-primary" />
                                )}
                            </div>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </nav>
    );
}