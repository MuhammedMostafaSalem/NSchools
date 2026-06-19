import TitleSection from "@/components/shared/TitleSection";
import CourseCard from "@/components/ui/CourseCard";
import FilterBar from "@/components/ui/FilterBar";
import Pagination from "@/components/ui/Pagination";
import img from "@/public/assets/images/teacher.jpg"

export default function Courses() {
    const courses = [
        {
            id: 1,
            title: "تعلم React.js من الصفر",
            description:
                "دورة شاملة لتعلم React.js وبناء تطبيقات حديثة.",
            image: img,
            instructor: "أحمد محمد",
            rating: 4.8,
            students: 120,
            price: 299,
            slug: "react-course",
        },
        {
            id: 2,
            title: "تعلم React.js من الصفر",
            description:
                "دورة شاملة لتعلم React.js وبناء تطبيقات حديثة.",
            image: img,
            instructor: "أحمد محمد",
            rating: 4.8,
            students: 120,
            price: 299,
            slug: "react-course",
        },
        {
            id: 3,
            title: "تعلم React.js من الصفر",
            description:
                "دورة شاملة لتعلم React.js وبناء تطبيقات حديثة.",
            image: img,
            instructor: "أحمد محمد",
            rating: 4.8,
            students: 120,
            price: 299,
            slug: "react-course",
        },
        {
            id: 4,
            title: "تعلم React.js من الصفر",
            description:
                "دورة شاملة لتعلم React.js وبناء تطبيقات حديثة.",
            image: img,
            instructor: "أحمد محمد",
            rating: 4.8,
            students: 120,
            price: 299,
            slug: "react-course",
        },
    ];

    return (
        <main className="container mx-auto px-6 py-12">
            <div className="flex justify-between ">
                <TitleSection title="الدورات المتاحة" />
                <FilterBar />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course}
                    />
                ))}
            </div>

            <Pagination />
        </main>
    )
}