import Image from "next/image";
import graduationCap from "@/public/assets/images/graduation-cap.png"
import { LuClipboardList } from "react-icons/lu";
import { LuAlarmClock } from "react-icons/lu";
import { LuBookOpenText } from "react-icons/lu";
import { LuUsersRound } from "react-icons/lu";

const rightFeatures = [
    {
        icon: LuClipboardList,
        title: "مسارات تعليمية متكاملة",
        description:
            "مسارات تعليمية منظمة تساعدك على تحقيق أهدافك",
    },
    {
        icon: LuAlarmClock,
        title: "تحديث مستمر",
        description:
            "نقوم بتحديث المحتوى التعليمي بشكل دوري لمواكبة أحدث التطورات",
    },
];

const leftFeatures = [
    {
        icon: LuBookOpenText,
        title: "محتوى عالي الجودة",
        description:
            "محتوى تعليمي تم تصميمه من قبل خبراء في المجال",
    },
    {
        icon: LuUsersRound,
        title: "مجتمع تعليمي نشط",
        description:
            "تفاعل مع طلاب ومتخصصين من جميع أنحاء العالم",
    },
];

export default function WhyNSchools() {
    return (
        <section className="section py-8">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="mb-16 text-center text-2xl font-bold text-secondary md:text-3xl">
                    لماذا NSchools؟
                </h2>

                <div className="grid items-center gap-12 md:gap-5 lg:gap-12 md:grid-cols-[1fr_auto_1fr]">
                    {/* LEFT + RIGHT merged on SM */}
                    <div className="space-y-12 md:hidden">
                        {[...leftFeatures, ...rightFeatures].map((feature, index) => (
                            <FeatureItem
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>

                    {/* Left Side */}
                    <div className="hidden md:block space-y-12">
                        {leftFeatures.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                reverse
                            />
                        ))}
                    </div>

                    {/* Center SVG */}
                    <div className="hidden md:flex justify-center">
                        <Image
                            src={graduationCap}
                            alt="Graduation Cap"
                            priority
                            className="h-auto w-[180px] md:w-[220px] lg:w-[260px]"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="hidden md:block space-y-12">
                        {rightFeatures.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


function FeatureItem({
    icon: Icon,
    title,
    description,
    reverse = false,
}) {
    return (
        <div
            className={`flex items-start gap-4 ${reverse ? "flex-row-reverse" : ""
                }`}
        >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-background-alt">
                <Icon
                    size={24}
                    strokeWidth={2}
                    className="text-primary"
                />
            </div>

            <div className={reverse ? "text-left" : "text-right"}>
                <h3 className="mb-2 text-lg font-bold text-secondary">
                    {title}
                </h3>

                <p className="max-w-sm text-sm leading-7 text-gray-600 md:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}