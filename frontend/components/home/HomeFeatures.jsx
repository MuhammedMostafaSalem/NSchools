import TitleSection from "../shared/TitleSection";
import { HiOutlineUsers } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";
import { LuClock3 } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";

const HomeFeatures = () => {
    const features = [
        {
            title: "دعم مستمر",
            description:
                "فريق دعم متخصص لمساعدتك في كل خطوة برحلتك التعليمية",
            icon: FiHeadphones,
            iconBg: "bg-blue-50",
            iconColor: "text-primary",
        },
        {
            title: "تعلم في أي وقت",
            description:
                "تعلم بالسرعة التي تناسبك وفي الوقت الذي يلاءم جدولك",
            icon: LuClock3,
            iconBg: "bg-indigo-50",
            iconColor: "text-secondary-light",
        },
        {
            title: "شهادات معتمدة",
            description:
            "احصل على شهادات معتمدة تعزز من فرصك المهنية",
            icon: SlBadge,
            iconBg: "bg-background-alt",
            iconColor: "text-primary",
        },
        {
            title: "تعلم تفاعلي",
            description:
                "محتوى تعليمي تفاعلي يساعدك على الفهم والتطبيق بشكل أفضل",
            icon: HiOutlineUsers,
            iconBg: "bg-background-alt",
            iconColor: "text-primary",
        },
    ]

    return (
        <section className="section">
            <div className="container mx-auto px-4">
                <TitleSection title="مميزات المنصة" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20 max-w-5xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="flex items-start gap-5 text-right"
                            >
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-background-soft flex items-center justify-center">
                                    <Icon
                                        size={28}
                                        className="text-primary"
                                        strokeWidth={2}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-secondary font-bold text-lg mb-2">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 leading-7 text-sm md:text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default HomeFeatures