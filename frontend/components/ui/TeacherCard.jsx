import Image from "next/image"
import Link from "next/link"
import { HiUsers } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const TeacherCard = ({ teacher }) => {
    return (
        <div
            className="
                bg-white
                rounded-lg
                overflow-hidden
                border border-background-alt
                shadow-sm
                hover:shadow-card
                transition-all
                duration-300
                hover:-translate-y-1
            "
        >
            {/* Course Image */}
            <div className="relative h-52 w-full">
                <Image
                    src={teacher.image}
                    alt={teacher.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col">
                <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-2">
                    {teacher.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6 mb-4 line-clamp-3">
                    {teacher.description}
                </p>

                {/* Students */}
                <div className="flex items-center justify-between text-gray-600 text-sm mb-5">
                    <div className="flex items-center gap-1">
                        <HiUsers />
                        <span>{teacher.students} طالب</span>
                    </div>
                    <div className="flex items-center gap-1 text-warning">
                        <FaStar size={14} />
                        <span className="text-sm font-medium text-gray-700">
                            {teacher.rating}
                        </span>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-primary">
                        {teacher.price} ج.م
                    </span>

                    <Link
                        href={`/courses/${teacher.slug}`}
                        className="
                            flex
                            items-center
                            gap-2
                            text-primary
                            font-semibold
                            hover:text-primary-dark
                            transition
                        "
                    >
                        عرض التفاصيل
                        <FaArrowLeft size={14} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TeacherCard