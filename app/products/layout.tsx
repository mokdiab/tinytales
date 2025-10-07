import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";

    export default function ProductLayout({children}:{children:React.ReactNode}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}