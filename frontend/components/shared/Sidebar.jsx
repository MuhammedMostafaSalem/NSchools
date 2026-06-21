"use client"

import {
    LuLayoutDashboard,
    LuBookOpenText,
    LuUser,
    LuChevronLeft,
    LuSettings
} from "react-icons/lu";
import Image from "next/image";
import logo from "@/public/assets/images/Logo.png"
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Sidebar = ({
    openSidebar, setOpenSidebar,
    collapsed, setCollapsed
}) => {
    const pathname = usePathname();
    const router = useRouter()

    const menu = [
        {
            name: "لوحة التحكم",
            icon: LuLayoutDashboard,
            path: "/student/dashboard"
        },
        {
            name: "الدورات",
            icon: LuBookOpenText,
            path: "/student/courses"
        },
        {
            name: "دوراتي",
            icon: LuUser,
            path: ""
        },
        {
            name: "الملف الشخصي",
            icon: LuUser,
            path: ""
        },
    ];

    return (
        <>
            {/* Overlay (MD) */}
            <div
                onClick={() => setOpenSidebar(false)}
                className={`
                fixed inset-0 bg-black/40 z-40 transition-all duration-300
                ${openSidebar ? "opacity-100 visible" : "opacity-0 invisible"}
                lg:hidden
            `}
            />

            {/* Sidebar */}
            <aside
                className={`
                fixed top-0 right-0 h-screen
                ${collapsed ? "w-20" : "w-64"}
                bg-background shadow-card z-50
                transition-all duration-700

                ${openSidebar ? "translate-x-0" : "translate-x-full"}

                lg:translate-x-0
                flex flex-col justify-between
                max-[767px]:hidden
            `}
            >
                <div>
                    <div
                        className={`
                            px-4 
                            ${collapsed ? "py-4" : "py-[1px]"}
                            font-bold
                            text-secondary
                            text-lg
                            border-b
                            flex
                            ${collapsed ? "justify-center" : "justify-between"}
                            justify-center
                            items-center
                        `}
                    >
                        {!collapsed && (
                            <span className="font-bold text-secondary text-lg">
                                <Image
                                    src={logo}
                                    alt="NSchools Logo"
                                    width={65}
                                    height={65}
                                    priority
                                />
                            </span>
                        )}

                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="p-2 rounded-md hover:bg-background-alt md:hidden lg:block"
                        >
                            <LuChevronLeft size={20} />
                        </button>
                    </div>

                    <ul className="p-3 space-y-2">
                        {menu.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <li
                                    key={i}
                                    onClick={() => {
                                        setOpenSidebar(false);
                                        router.push(item.path)
                                    }}
                                    className={`
                                    flex items-center
                                    ${collapsed ? "justify-center" : "gap-3"}
                                    p-3 rounded-lg cursor-pointer transition

                                    ${pathname === item.path
                                            ? "bg-primary text-white"
                                            : "hover:bg-background-alt"
                                        }
                                `}
                                >
                                    <Icon size={20} />

                                    {!collapsed && (
                                        <span>{item.name}</span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div
                    className={`
                    flex items-center
                    ${collapsed && "justify-center"}
                    gap-3
                    py-3 px-3 mb-3 mx-3 rounded-lg cursor-pointer transition
                    hover:bg-background-alt
                `}
                >
                    <LuSettings size={20} />

                    {
                        !collapsed && (
                            <span>الاعدادات</span>
                        )
                    }
                </div>
            </aside>

            {/* Bottom Navbar (SM) */}
            <div className="fixed bottom-0 left-0 w-full bg-background shadow-navbar flex justify-around items-center p-2 md:hidden z-50">
                {menu.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            href={item.path}
                            key={i}
                            className={`flex flex-col items-center transition ${pathname === item.path
                                ? "text-primary"
                                : "text-gray-500"
                            }`}
                        >
                            <Icon size={22} />
                            <span className="text-xs mt-1">
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
                <button
                    className={`flex flex-col items-center transition text-gray-500`}
                >
                    <LuSettings size={22} />
                    <span className="text-xs mt-1">
                        الاعدادات
                    </span>
                </button>
            </div>
        </>
    )
}

export default Sidebar