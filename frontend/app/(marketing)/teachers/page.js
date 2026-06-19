import TeachersHero from "@/components/teachers/TeachersHero";
import TeachersFilters from "@/components/teachers/TeachersFilters";
import Pagination from "@/components/ui/Pagination";
import TeacherCard from "@/components/ui/TeacherCard";
import img from "@/public/assets/images/teacher.jpg"

export default function TeachersPage() {
    const teachers = [
        { id: 1, name: "أحمد كمال", specialty: "فيزياء", image: img, rating: 4.8 },
        { id: 2, name: "هدى يوسف", specialty: "فنون", image: img, rating: 4.8 },
        { id: 3, name: "محمد علي", specialty: "قانون", image: img, rating: 4.8 },
        { id: 4, name: "محمود عامر", specialty: "برمجة", image: img, rating: 4.8 },
    ];

    return (
        <div className="bg-background min-h-screen">
            <div className="container mx-auto px-4 py-10 space-y-10">
                <TeachersHero />
                <TeachersFilters />
                {/* <TeachersComponent /> */}
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {teachers.map((teacher) => (
                        <TeacherCard key={teacher.id} teacher={teacher} />
                    ))}
                </section>

                <Pagination />
            </div>
        </div>
    )
}