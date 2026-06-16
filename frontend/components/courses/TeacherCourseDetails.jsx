import Image from "next/image"
import Link from "next/link"
import teacher from "@/public/assets/images/teacher.jpg"

const TeacherCourseDetails = () => {
    return (
        <section className="bg-white rounded-lg shadow-card p-6 flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-primary-dark">المدرس</h2>

            <div className="flex items-center gap-5">
                <Image
                    src={teacher}
                    alt="Teacher"
                    className="w-24 h-24 rounded-full object-cover"
                />

                <div>
                    <Link href={`/teachers/:id`} className="text-base md:text-lg font-bold text-secondary">
                        Sertin Aplima
                    </Link>

                    <p className="text-gray-600 text-sm md:text-base">
                        Senior Python Developer
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-warning">★★★★★</span>
                        <span className="text-gray-600 text-xs md:text-sm">
                            4.8 (1200 reviews)
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeacherCourseDetails