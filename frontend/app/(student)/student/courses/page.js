import Pagination from "@/components/ui/Pagination";
import StudentCourseCard from "@/components/ui/StudentCourseCard";
import img from "@/public/assets/images/teacher.jpg"

export default function StudentCoursesPage() {
    const myCourses = [
        {
            id: 1,
            title: "أساسيات لغة بايثون",
            teacher: "أحمد كمال",
            progress: 65,
            image: img,
            students: 120
        },
        {
            id: 2,
            title: "Advanced Data Structures",
            teacher: "سيرتين أبما",
            progress: 25,
            image: img,
            students: 120
        },
        {
            id: 3,
            title: "Web Development",
            teacher: "سيرتين أبما",
            progress: 65,
            image: img,
            students: 120
        },
        {
            id: 4,
            title: "Modern UI/UX Design",
            teacher: "سيرتين هيومان",
            progress: 0,
            image: img,
            students: 120
        },
    ];

    return (
        <div className="px-6 pt-6 max-[767px]:pb-[80px] pb-6 space-y-6">
            <div
                className="grid grid-cols-1 gap-4"
            >
                <div
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
                    {/* Content */}
                    <div className="text-right">
                        <h3 className="text-sm md:text-lg font-bold text-secondary">
                            دوراتي التعليمية
                        </h3>

                        <p className="text-xs text-gray-600 mb-1">
                            كل المواد التي اشتركت بها موجودة هنا.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {myCourses.map((course) => (
                    <StudentCourseCard key={course.id} course={course} />
                ))}
            </div>
            
            <Pagination />
        </div>
    )
}