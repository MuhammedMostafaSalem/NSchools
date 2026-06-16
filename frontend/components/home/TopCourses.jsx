import TitleSection from "../shared/TitleSection";
import TeacherCard from "../ui/TeacherCard";
import img from "@/public/assets/images/teacher.jpg"

const TopCourses = () => {
    // Mock data for featured teachers
    const teachers = [
        { id: 1, name: "أحمد كمال", specialty: "فيزياء", image: img },
        { id: 2, name: "هدى يوسف", specialty: "فنون", image: img },
        { id: 3, name: "محمد علي", specialty: "قانون", image: img },
        { id: 4, name: "محمود عامر", specialty: "برمجة", image: img },
    ];

    return (
        <section className="container mx-auto px-6 py-12">
            <TitleSection nameTitle="أعلى الدورات" path="/courses" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teachers.map((teacher) => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </section>
    )
}

export default TopCourses