import {
    LuBadgeCheck,
    LuClock3,
    LuClipboardList
} from "react-icons/lu";

const StudentStatsCard = () => {
    const stats = [
        {
            id: 1,
            title: "المواد المشتركة",
            value: "12 مادة",
            icon: LuClipboardList,
            bg: "bg-background-soft",
            iconColor: "text-primary",
        },
        {
            id: 2,
            title: "الساعات التعليمية",
            value: "45 ساعة",
            icon: LuClock3,
            bg: "bg-[#F8F2E3]",
            iconColor: "text-secondary",
        },
        {
            id: 3,
            title: "عدد الشهادات المعتمدة",
            value: "الشهادات المحصلة",
            icon: LuBadgeCheck,
            bg: "bg-background-soft",
            iconColor: "text-primary",
        },
    ];

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
            {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.id}
                        className="
                            bg-white
                            border
                            border-gray-200
                            rounded-lg
                            px-3 md:px-5
                            py-3 md:py-4
                            flex
                            gap-5
                            items-center
                            shadow-[0_1px_3px_rgba(0,0,0,0.04)]
                        "
                    >
                        {/* Icon */}
                        <div
                            className={`
                                w-11 h-11
                                rounded-md
                                flex items-center justify-center
                                ${item.bg}
                            `}
                        >
                            <Icon
                                size={20}
                                className={item.iconColor}
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="text-right">
                            <p className="text-xs text-gray-600 mb-1">
                                {item.title}
                            </p>

                            <h3 className="text-sm md:text-lg font-bold text-secondary">
                                {item.value}
                            </h3>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default StudentStatsCard