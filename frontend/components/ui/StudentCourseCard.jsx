import Image from "next/image"
import Link from "next/link";
import { HiUsers } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const StudentCourseCard = ({ course }) => {
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
                flex flex-col
                h-full
            "
        >
            {/* Course Image */}
            <div className="relative h-52 w-full">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-md font-bold text-secondary mb-2 line-clamp-2">
                    {course.title}
                </h3>

                {/* Instructor */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-700">
                        {course.teacher}
                    </span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <HiUsers />
                        <span>{course.students} طالب</span>
                    </div>

                    <div
                        className="
                            text-primary
                            font-semibold
                            hover:text-primary-dark
                            transition
                        "
                    >
                        {course.progress}%
                    </div>
                </div>

                {/* Button */}
                <button
                    className="
                        mt-4
                        w-full
                        bg-primary
                        text-white
                        py-2
                        rounded-lg
                        font-medium
                        hover:bg-primary-dark
                        transition-colors
                    "
                >
                    متابعة الدورة
                </button>
            </div>
        </div>
    )
}

export default StudentCourseCard