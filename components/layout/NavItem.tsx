import Link from "next/link";
export default function NavItem({icon,title,href}:{icon:React.ReactNode,title:string,href:string}) {
    return(
        <div>
            <Link href={href} className="flex items-center font-[14px] text-muted-foreground hover:text-primary-foreground">
                <span className="flex items-center gap-1">
                    {icon}
                    {title}
                </span>
            </Link>
        </div>
    )
}