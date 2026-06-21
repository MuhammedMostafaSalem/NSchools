"use client"

import { useState } from 'react'
import Sidebar from '../shared/Sidebar';
import DashboardHeader from '../dashboard/DashboardHeader';

const SidebarLayout = ({ childrenProp }) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex bg-gray-50 min-h-screen">
            {/* الـ Sidebar يحتاج لتمرير الـ props للتحكم فيه */}
            <Sidebar
                openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}
                collapsed={isCollapsed} setCollapsed={setIsCollapsed}
            />

            {/* المحتوى الرئيسي */}
            <main
                className={`
                    flex-1 transition-all duration-700
                    ${isCollapsed ? "lg:mr-20" : "lg:mr-64"}
                `}
            >
                <DashboardHeader setOpenSidebar={setOpenSidebar} />
                {childrenProp}
            </main>
        </div>
    )
}

export default SidebarLayout