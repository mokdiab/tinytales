'use client'
import Image from "next/image";
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Button } from "@/components/ui/button";
  
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import {
    FaShoppingCart,
    FaUser,
    FaCog,
    FaSignOutAlt,
    FaPlus,
    FaMinus,
    FaTrash,
    FaRegUser,
  } from "react-icons/fa";
  import { FaRegHeart } from "react-icons/fa";
  import { IoMdNotificationsOutline } from "react-icons/io";
  import { TbShoppingBag } from "react-icons/tb";
import NavItem from "./NavItem";
import { useState } from "react";

const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1, image: "/headphones.jpg" },
    { id: 2, name: "Smart Watch", price: 199.99, quantity: 2, image: "/watch.jpg" },
  ];
  
  const wishlistItems = [
    { id: 1, name: "Gaming Keyboard", price: 129.99, image: "/keyboard.jpg" },
    { id: 2, name: "Monitor", price: 299.99, image: "/monitor.jpg" },
  ];
  
  const notifications = [
    { id: 1, message: "Your order has been shipped", time: "5 min ago", read: false },
    { id: 2, message: "Summer sale starts tomorrow", time: "1 hour ago", read: true },
    { id: 3, message: "Payment confirmed", time: "2 hours ago", read: true },
  ];

  const languages = [
    { code: "EN", name: "English" },
    { code: "AR", name: "العربية" },
    { code: "FR", name: "Français" },
    { code: "ES", name: "Español" },
  ];

export default function Header() {
    const [cart, setCart] = useState(cartItems);
    const [wishlist, setWishlist] = useState(wishlistItems);
    const [notifs, setNotifs] = useState(notifications);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
  
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const unreadNotifs = notifs.filter(notif => !notif.read).length;
  
    const updateQuantity = (id: number, change: number) => {
      setCart(cart.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0));
    };
  
    const removeFromCart = (id: number) => {
      setCart(cart.filter(item => item.id !== id));
    };
  
    const removeFromWishlist = (id: number) => {
      setWishlist(wishlist.filter(item => item.id !== id));
    };
  
    const markAllAsRead = () => {
      setNotifs(notifs.map(notif => ({ ...notif, read: true })));
    };

    const navItems = [
        {icon: <RiHomeLine size={20}/>, title: "Home", href:"/"},
        {icon: <BiCategoryAlt size={20}/>, title: "Our Category", href:"/category"},
        {icon: <Image src="/images/icons/aboutus.png" alt="About Us" width={20} height={20} />, title: "About Us", href:"/about-us"},
        {icon: <CgWebsite size={20}/>, title: "Contact Us", href:"/contact-us"},
        {icon: <Image src="/images/icons/faq.png" alt="FAQs" width={20} height={20} />, title: "FAQs", href:"/faqs"},
    ];

    return(
        <header className="h-[90px] flex items-center shadow-sm relative">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center ms-4 md:ms-0 gap-12">
                        <Link href="/">
                            <Image src="/logo.svg" alt="Tiny Tales" width={66} height={51} />
                        </Link>
                        <div className="hidden lg:flex items-center gap-10">
                            {navItems.map((item) => (
                                <NavItem key={item.title} icon={item.icon} title={item.title} href={item.href} />
                            ))}
                        </div>
                    </div>

                    {/* Desktop Icons */}
                    <div className="hidden lg:flex items-center gap-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100">
                                    <TbShoppingBag className="w-6 h-6 text-gray-700" />
                                    {cart.length > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                                            {cart.length}
                                        </span>
                                    )}
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-80">
                                <DropdownMenuLabel className="flex justify-between items-center">
                                    <span className="flex items-center gap-2">
                                        <TbShoppingBag className="h-4 w-4" />
                                        Shopping Cart ({cart.length})
                                    </span>
                                    {cart.length > 0 && (
                                        <span className="text-sm font-normal">${cartTotal.toFixed(2)}</span>
                                    )}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                
                                {cart.length === 0 ? (
                                    <div className="p-4 text-center text-muted-foreground">
                                        <TbShoppingBag className="h-10 w-10 mx-auto mb-2 opacity-50" />
                                        <p>Your cart is empty</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="max-h-64 overflow-y-auto">
                                            {cart.map((item) => (
                                                <div key={item.id} className="p-2 hover:bg-accent">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar className="h-10 w-10">
                                                            <AvatarImage src={item.image} alt={item.name} />
                                                            <AvatarFallback>{item.name[0]}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium truncate">{item.name}</p>
                                                            <p className="text-sm text-muted-foreground">
                                                                ${item.price} × {item.quantity}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-6 w-6"
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                            >
                                                                <FaMinus className="h-3 w-3" />
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-6 w-6"
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                            >
                                                                <FaPlus className="h-3 w-3" />
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-6 w-6 text-destructive"
                                                                onClick={() => removeFromCart(item.id)}
                                                            >
                                                                <FaTrash className="h-3 w-3" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <DropdownMenuSeparator />
                                        <div className="p-2">
                                            <Button className="w-full gap-2">
                                                <FaShoppingCart className="h-4 w-4" />
                                                Checkout
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100">
                                    <IoMdNotificationsOutline className="w-6 h-6 text-gray-700" />
                                    {unreadNotifs > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                                            {unreadNotifs}
                                        </span>
                                    )}
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-80">
                                <DropdownMenuLabel className="flex justify-between items-center">
                                    <span className="flex items-center gap-2">
                                        <IoMdNotificationsOutline className="h-4 w-4" />
                                        Notifications
                                    </span>
                                    {unreadNotifs > 0 && (
                                        <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                                            Mark all as read
                                        </Button>
                                    )}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                
                                {notifs.length === 0 ? (
                                    <div className="p-4 text-center text-muted-foreground">
                                        <IoMdNotificationsOutline className="h-8 w-8 mx-auto mb-2 opacity-50" />
                                        <p>No notifications</p>
                                    </div>
                                ) : (
                                    <div className="max-h-64 overflow-y-auto">
                                        {notifs.map((notif) => (
                                            <DropdownMenuItem 
                                                key={notif.id} 
                                                className={`p-3 cursor-pointer ${!notif.read ? 'bg-accent' : ''}`}
                                            >
                                                <div className="flex gap-3 w-full">
                                                    {!notif.read && (
                                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                    )}
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm">{notif.message}</p>
                                                        <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                                                    </div>
                                                </div>
                                            </DropdownMenuItem>
                                        ))}
                                    </div>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100">
                                    <FaRegHeart className="w-5 h-5 text-gray-700" />
                                    {wishlist.length > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                                            {wishlist.length}
                                        </span>
                                    )}
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-72">
                                <DropdownMenuLabel className="flex items-center gap-2">
                                    <FaRegHeart className="h-4 w-4" />
                                    Wishlist ({wishlist.length})
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                
                                {wishlist.length === 0 ? (
                                    <div className="p-4 text-center text-muted-foreground">
                                        <FaRegHeart className="h-8 w-8 mx-auto mb-2 opacity-50" />
                                        <p>Your wishlist is empty</p>
                                    </div>
                                ) : (
                                    <div className="max-h-64 overflow-y-auto">
                                        {wishlist.map((item) => (
                                            <DropdownMenuItem key={item.id} className="p-2 cursor-pointer">
                                                <div className="flex items-center gap-3 w-full">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarImage src={item.image} alt={item.name} />
                                                        <AvatarFallback>{item.name[0]}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium truncate">{item.name}</p>
                                                        <p className="text-sm text-muted-foreground">${item.price}</p>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 text-destructive"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            removeFromWishlist(item.id);
                                                        }}
                                                    >
                                                        <FaTrash className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            </DropdownMenuItem>
                                        ))}
                                    </div>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-1">
                                    <span className="text-sm font-medium text-gray-700">{selectedLanguage}</span>
                                    <MdKeyboardArrowDown className="w-4 h-4 text-gray-700" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                                <DropdownMenuLabel>Language</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {languages.map((lang) => (
                                    <DropdownMenuItem 
                                        key={lang.code} 
                                        className="cursor-pointer"
                                        onClick={() => setSelectedLanguage(lang.code)}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <span>{lang.name}</span>
                                            {selectedLanguage === lang.code && (
                                                <span className="text-primary">✓</span>
                                            )}
                                        </div>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="cursor-pointer p-2 rounded-full hover:bg-gray-100 flex items-center gap-1">
                                    <FaRegUser className="w-5 h-5 text-gray-700" />
                                    <MdKeyboardArrowDown className="w-4 h-4 text-gray-700" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">John Doe</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            john.doe@example.com
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer">
                                    <FaUser className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    <FaCog className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer text-destructive">
                                    <FaSignOutAlt className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <button 
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <IoClose className="w-7 h-7 text-gray-700" />
                        ) : (
                            <HiMenuAlt3 className="w-7 h-7 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-[90px] left-0 right-0 bg-white shadow-lg border-t z-40 max-h-[calc(100vh-90px)] overflow-y-auto">
                    <div className="container mx-auto px-4 py-4">
                        <div className="pb-4 mb-4 border-b">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-12 w-12">
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">John Doe</p>
                                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                                </div>
                            </div>
                        </div>

                        <nav className="flex flex-col gap-2 mb-4 pb-4 border-b">
                            {navItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.icon}
                                    <span className="text-gray-700">{item.title}</span>
                                </Link>
                            ))}
                        </nav>

                        <div className="mb-4 pb-4 border-b">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-medium flex items-center gap-2">
                                    <TbShoppingBag className="w-5 h-5" />
                                    Shopping Cart ({cart.length})
                                </h3>
                                {cart.length > 0 && (
                                    <span className="text-sm font-medium">${cartTotal.toFixed(2)}</span>
                                )}
                            </div>
                            {cart.length === 0 ? (
                                <p className="text-sm text-muted-foreground text-center py-4">Your cart is empty</p>
                            ) : (
                                <>
                                    <div className="space-y-2 mb-3">
                                        {cart.map((item) => (
                                            <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarImage src={item.image} alt={item.name} />
                                                    <AvatarFallback>{item.name[0]}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium truncate">{item.name}</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        ${item.price} × {item.quantity}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6"
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                    >
                                                        <FaMinus className="h-3 w-3" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6"
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                    >
                                                        <FaPlus className="h-3 w-3" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 text-destructive"
                                                        onClick={() => removeFromCart(item.id)}
                                                    >
                                                        <FaTrash className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="w-full gap-2">
                                        <FaShoppingCart className="h-4 w-4" />
                                        Checkout
                                    </Button>
                                </>
                            )}
                        </div>

                        <div className="mb-4 pb-4 border-b">
                            <h3 className="font-medium flex items-center gap-2 mb-3">
                                <FaRegHeart className="w-5 h-5" />
                                Wishlist ({wishlist.length})
                            </h3>
                            {wishlist.length === 0 ? (
                                <p className="text-sm text-muted-foreground text-center py-4">Your wishlist is empty</p>
                            ) : (
                                <div className="space-y-2">
                                    {wishlist.map((item) => (
                                        <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={item.image} alt={item.name} />
                                                <AvatarFallback>{item.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium truncate">{item.name}</p>
                                                <p className="text-sm text-muted-foreground">${item.price}</p>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-6 w-6 text-destructive"
                                                onClick={() => removeFromWishlist(item.id)}
                                            >
                                                <FaTrash className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mb-4 pb-4 border-b">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-medium flex items-center gap-2">
                                    <IoMdNotificationsOutline className="w-5 h-5" />
                                    Notifications
                                </h3>
                                {unreadNotifs > 0 && (
                                    <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                                        Mark all as read
                                    </Button>
                                )}
                            </div>
                            {notifs.length === 0 ? (
                                <p className="text-sm text-muted-foreground text-center py-4">No notifications</p>
                            ) : (
                                <div className="space-y-2">
                                    {notifs.map((notif) => (
                                        <div 
                                            key={notif.id} 
                                            className={`p-3 rounded-lg ${!notif.read ? 'bg-accent' : 'bg-gray-50'}`}
                                        >
                                            <div className="flex gap-3">
                                                {!notif.read && (
                                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                )}
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm">{notif.message}</p>
                                                    <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mb-4 pb-4 border-b">
                            <h3 className="font-medium mb-3">Language</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`p-3 rounded-lg border text-left transition-colors ${
                                            selectedLanguage === lang.code 
                                                ? 'border-primary bg-primary/5' 
                                                : 'border-gray-200 hover:bg-gray-50'
                                        }`}
                                        onClick={() => setSelectedLanguage(lang.code)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">{lang.name}</span>
                                            {selectedLanguage === lang.code && (
                                                <span className="text-primary">✓</span>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                <FaUser className="w-5 h-5 text-gray-700" />
                                <span className="text-gray-700">Profile</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                <FaCog className="w-5 h-5 text-gray-700" />
                                <span className="text-gray-700">Settings</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-destructive">
                                <FaSignOutAlt className="w-5 h-5" />
                                <span>Log out</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}