import TitleSection from "../shared/TitleSection";
import business from "@/public/assets/images/business.png"
import code from "@/public/assets/images/code.png"
import design from "@/public/assets/images/design.png"
import marketing from "@/public/assets/images/marketing.png"
import ai from "@/public/assets/images/ai.png"
import HomeCoursesCard from "../ui/HomeCoursesCard";
import Link from "next/link"

const HomeCourses = () => {
    const courses = [
        {
            id: 1,
            name: "برمجة وتطوير",
            description:
                "تعلم البرمجة وأحدث التقنيات من الصفر حتى الاحتراف",
            image: code,
            slug: "programming",
        },

        {
            id: 2,
            name: "تصميم",
            description:
                "دورات لتعلم التصميم الجرافيكي وتصميم واجهات المستخدم",
            image: design,
            slug: "design",
        },

        {
            id: 3,
            name: "تسويق",
            description:
                "استراتيجيات التسويق الرقمي وزيادة نمو عملك",
            image: marketing,
            slug: "marketing",
        },

        {
            id: 4,
            name: "أعمال وإدارة",
            description:
                "دورات في الإدارة وتطوير المهارات القيادية والتنظيمية",
            image: business,
            slug: "business",
        },

        {
            id: 5,
            name: "الذكاء الاصطناعي",
            description:
                "تعلم الذكاء الاصطناعي وتطبيقاته العملية",
            image: ai,
            slug: "ai",
        },
    ];

    const featuredCourses = courses.slice(0, 4);
    const colors = ['#DDF3EE', '#F2EAFE', '#FFF0E4', '#EDF4FF']
    const borders = ['#B9DDD8', '#E6D8FA', '#F6DEC8', '#D9E6FA']

    return (
        <section className="section">
            <div className="container mx-auto px-4">
                <TitleSection title="تصفح الدورات التعليمية" />

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {featuredCourses.map((course, index) => (
                        <HomeCoursesCard
                            key={index}
                            course={course}
                            iconBg={colors[index]}
                            borderColors={borders[index]}
                        />
                    ))}
                </div>

                {courses.length > 4 && (
                    <div className="flex justify-center mt-10">
                        <Link href='/courses' className="btn-primary">
                            عرض جميع التصنيفات
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HomeCourses