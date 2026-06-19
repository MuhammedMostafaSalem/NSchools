import Image from "next/image"
import Link from "next/link";
import { HiUsers } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const CourseCard = ({ course }) => {
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
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col">
                <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-2">
                    {course.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6 mb-4 line-clamp-3">
                    {course.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-700">
                        {course.instructor}
                    </span>

                    <div className="flex items-center gap-1 text-warning">
                        <FaStar size={14} />
                        <span className="text-sm font-medium text-gray-700">
                            {course.rating}
                        </span>
                    </div>
                </div>

                {/* Students */}
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-5">
                    <HiUsers />
                    <span>{course.students} طالب</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-primary">
                        {course.price} ج.م
                    </span>

                    <Link
                        href={`/courses/${course.slug}`}
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

export default CourseCard