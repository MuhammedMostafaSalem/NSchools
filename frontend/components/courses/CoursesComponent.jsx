import TeacherCard from "../ui/TeacherCard";
import img from "@/public/assets/images/teacher.jpg"

const CoursesComponent = () => {
    const topCourses = [
        { id: 1, name: "أحمد كمال", specialty: "فيزياء", image: img },
        { id: 2, name: "هدى يوسف", specialty: "فنون", image: img },
        { id: 3, name: "محمد علي", specialty: "قانون", image: img },
        { id: 4, name: "محمود عامر", specialty: "برمجة", image: img },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCourses.map((course) => (
                <TeacherCard key={course.id} teacher={course} />
            ))}
        </div>
    )
}

export default CoursesComponent