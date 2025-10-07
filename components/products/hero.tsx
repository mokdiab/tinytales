import Image from "next/image";

export default function ProductDetailsHero() {
    return (
        <section className="relative h-[210px] w-full overflow-hidden">
            <div className="absolute inset-0">
                <Image 
                    src="/images/heros/hero.png" 
                    alt="Product Details Hero" 
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-background" />
            </div>

            <div className="relative h-full flex items-center justify-center">
                <div className="container mx-auto px-4">
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <h2 className="text-[40px] md:text-[90px] font-bold whitespace-nowrap select-none"
                            style={{
                                WebkitTextStroke: '1px rgba(0, 0, 0, 0.05)',
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent'
                            }}>
                            Product Details
                        </h2>
                    </div>
                    <h1 className="relative text-[32px] md:text-[38px] font-semibold text-foreground text-center z-10">
                        Product Details
                    </h1>
                </div>
            </div>
        </section>
    );
}