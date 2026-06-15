"use client";

import { useState } from "react";
import Image from "next/image"
import logo from "@/public/assets/images/Logo.png"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    const navLinks = [
        { name: "الرئيسية", href: "/" },
        { name: "الدورات", href: "/courses" },
        { name: "المعلمين", href: "/teachers" },
        { name: "عن المنصة", href: "/about" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-border py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src={logo} alt="NSchools Logo" width={65} height={65} />
                </Link>

                {/* Navigation Links (Responsive) */}
                <ul className={`
                    flex flex-col md:flex-row items-center gap-6 md:gap-8 text-dark font-medium
                    absolute md:static top-full left-0 w-full md:w-auto
                    bg-white md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none
                    overflow-hidden
                    transition-all duration-300 ease-in-out origin-top
                    ${
                        isOpen
                            ? "max-h-[500px] opacity-100 visible"
                            : "max-h-0 opacity-0 invisible md:max-h-full md:opacity-100 md:visible"
                    }
                `}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`cursor-pointer hover:text-primary transition whitespace-nowrap
                                ${pathname === link.href ? "text-primary" : ""}
                                `}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}

                    {/* Mobile Only: Authentication Buttons inside the menu */}
                    <li className="w-full md:hidden mt-4 list-none">
                        <hr className="mb-2" />
                        <div className="flex flex-col gap-3">
                            <Link href="/login" className="btn-dark text-center">
                                تسجيل الدخول
                            </Link>
                            <Link href="/register" className="btn-primary text-center">
                                إنشاء حساب
                            </Link>
                        </div>
                    </li>
                </ul>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="btn-dark">تسجيل الدخول</Link>
                    <Link href="/register" className="btn-primary">إنشاء حساب</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-dark text-[25px]" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>
        </div>
    )
}

export default Navbar