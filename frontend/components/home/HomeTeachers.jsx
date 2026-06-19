import TitleSection from "../shared/TitleSection";
import TeacherCard from "../ui/TeacherCard";
import img from "@/public/assets/images/teacher.jpg"

const HomeTeachers = () => {
    // Mock data for featured teachers
    const teachers = [
        { id: 1, name: "أحمد كمال", specialty: "خبير فيزياء", image: img, rating: 4.8 },
        { id: 2, name: "هدى يوسف", specialty: "خبير فنون", image: img, rating: 4.8 },
        { id: 3, name: "محمد علي", specialty: "خبير قانون", image: img, rating: 4.8 },
        { id: 4, name: "محمود عامر", specialty: "خبير برمجة", image: img, rating: 4.8 },
    ];

    return (
        <section className="section container mx-auto px-6">
            <TitleSection title="المعلمين المتميزون" />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {teachers.map((teacher) => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </section>
    )
}

export default HomeTeachers