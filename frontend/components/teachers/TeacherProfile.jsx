import CourseReviews from "../courses/CourseReviews"
import StatsCard from "./StatsCard"
import { FaCalendar } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { SiOpenlayers } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import img from "@/public/assets/images/teacher.jpg"
import TeacherCard from "../ui/TeacherCard";
import CourseCard from "../ui/CourseCard";

const TeacherProfile = ({ courses }) => {
    return (
        <div className="bg-white rounded-lg shadow-card overflow-hidden">
            {/* Header */}
            <div className="grid lg:grid-cols-3 gap-8 p-8">
                {/* Profile */}
                <div className="lg:col-span-2 flex flex-col items-start">
                    <div className="flex gap-4 items-center">
                        <Image
                            src={img}
                            alt="Instructor"
                            className="rounded-full w-[70px] h-[70px] md:w-[120px] md:h-[120px] object-cover"
                        />
                        <div>
                            <h1 className="text-ld md:text-xl lg-text-2xl font-bold text-primary">
                                Sertin Aplma
                            </h1>

                            <p className="text-gray-700 text-sm md:text-md">
                                Senior Python Developer
                            </p>

                            <div className="flex items-center justify-start gap-2 text-xs md:text-md">
                                <span className="text-primary">
                                    (reviews 1,200)
                                </span>

                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            size={16}
                                            fill="#ECC852"
                                            color="#ECC852"
                                        />
                                    ))}
                                </div>

                                <span className="text-warning font-semibold">
                                    4.8
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="mt-5 font-bold text-lg md:text-xl text-secondary">
                            خبرة 10 سنوات في البرمجة
                            <br />
                            أكثر من 5,000 طالب
                        </h3>

                        <h4 className="font-bold text-secondary mt-4 text-md md:text-lg">
                            Bio
                        </h4>

                        <p className="text-gray-600 leading-8 mt-2 text-sm md:text-md">
                            استمتع بتعلم البرمجة من خلال الدورات المكثفة
                            التي تركز على الجانب العملي. خبرة طويلة
                            في تطوير التطبيقات وتحليل البيانات وبناء
                            الأنظمة الحديثة.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-col gap-6 p-4 max-[767px]:border-t md:border-r border-gray-200">
                    <StatsCard
                        title="تاريخ الانضمام"
                        value="مايو 2020"
                        icon={<FaCalendar size={20} />}
                    />
                    <hr className="border-1 border-gray-200" />
                    <StatsCard
                        title="إجمالي الطلاب"
                        value="5,123"
                        icon={<MdPeopleAlt size={20} />}
                    />
                    <hr className="border-1 border-gray-200" />
                    <StatsCard
                        title="عدد الدورات المتاحة"
                        value="15"
                        icon={<SiOpenlayers size={20} />}
                    />
                </div>
            </div>

            <hr className="border-1 border-gray-200 mx-8" />

            {/* Courses */}
            <div className="p-8">
                <h2 className="text-xl md:text-2xl font-bold text-primary-dark mb-8">Courses By Sertin Aplma</h2>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>

            {/* Reviews */}
            <CourseReviews />
        </div>
    )
}

export default TeacherProfile