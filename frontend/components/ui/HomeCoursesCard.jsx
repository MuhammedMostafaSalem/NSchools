import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const HomeCoursesCard = ({ course, iconBg, borderColors }) => {
    return (
        <Link
            href={`/courses/${course.slug}`}
            className="
                group
                bg-white
                rounded-lg
                border
                p-8
                min-h-[290px]
                flex
                flex-col
                items-center
                text-center
                transition-all
                duration-300
                hover:shadow-card
                hover:-translate-y-1
            "
            style={{
                borderColor: borderColors,
            }}
        >
            <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                    backgroundColor: iconBg,
                }}
            >
                <Image
                    src={course.image}
                    alt={course.name}
                    className="object-contain w-[30px] h-[30px]"
                />
            </div>

            <h3 className="text-xl font-bold text-secondary mb-3">
                {course.name}
            </h3>

            <p className="text-gray-600 text-sm leading-7">
                {course.description}
            </p>

            <div
                className="
                    mt-auto
                    pt-8
                    flex
                    items-center
                    gap-2
                    text-primary
                    font-semibold
                    transition
                    group-hover:text-primary-dark
                "
            >
                استكشاف
                <FaArrowLeft size={18} />
            </div>
        </Link>
    )
}

export default HomeCoursesCard