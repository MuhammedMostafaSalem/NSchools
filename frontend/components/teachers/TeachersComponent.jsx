import TeacherCard from "../ui/TeacherCard";
import img from "@/public/assets/images/teacher.jpg"

const TeachersComponent = () => {
    const teachers = [
        { id: 1, name: "أحمد كمال", specialty: "فيزياء", image: img },
        { id: 2, name: "هدى يوسف", specialty: "فنون", image: img },
        { id: 3, name: "محمد علي", specialty: "قانون", image: img },
        { id: 4, name: "محمود عامر", specialty: "برمجة", image: img },
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
        </section>
    )
}

export default TeachersComponent