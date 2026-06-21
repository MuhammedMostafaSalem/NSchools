"use client";

import { useEffect, useRef, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

const DashboardHeader = ({ setOpenSidebar }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    const handleLogout = () => {
        console.log("logout");
        // logout logic
    };

    return (
        <header className="bg-white border border-gray-200 shadow-card">
            <div className="flex items-center justify-between px-[20px] py-[5px]">
                <div className="flex gap-3">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpenSidebar(true)}
                        className="lg:hidden max-[767px]:hidden bg-primary text-white p-2 rounded-md"
                    >
                        <LuMenu size={22} />
                    </button>
                    
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-secondary">
                        أهلا بك يا محمد
                    </h1>
                </div>

                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setOpen(!open)}
                        className="
                            flex
                            items-center
                            gap-3
                            px-3
                            py-2
                            rounded-lg  
                            transition
                        "
                    >
                        <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt="user"
                            className="w-10 h-10 rounded-full border"
                        />
                    </button>

                    {open && (
                        <div
                            className="
                                absolute
                                left-0
                                mt-2
                                w-52
                                bg-white
                                border
                                border-gray-200
                                rounded-lg
                                shadow-card
                                overflow-hidden
                                z-50
                            "
                        >
                            <button
                                onClick={handleLogout}
                                className="
                                    w-full
                                    flex
                                    items-center
                                    gap-3
                                    px-4
                                    py-3
                                    text-red-500
                                    hover:bg-red-50
                                    transition
                                "
                            >
                                <FaSignOutAlt />
                                <span>تسجيل الخروج</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader