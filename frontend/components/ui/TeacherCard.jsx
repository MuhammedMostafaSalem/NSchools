import Image from "next/image"
import Link from "next/link"
import { FaStar } from "react-icons/fa";

const TeacherCard = ({ teacher }) => {
    return (
        <Link href={`/teachers/${teacher.id}`} className="bg-white rounded-lg shadow-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="relative w-full h-52 sm:h-56 md:h-60">
                <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    className="object-cover "
                />
            </div>
            <div className="p-4 flex flex-col text-center gap-2">
                <h3 className="font-bold text-secondary text-lg md:text-xl">{teacher.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">{teacher.specialty}</p>
                <div className="flex justify-center items-center gap-1 text-warning">
                    <span className="text-sm font-medium text-gray-700">
                        {teacher.rating}
                    </span>
                    <FaStar size={14} />
                </div>
                {/* <Link href={`/teachers/${teacher.id}`} className="btn-primary w-full mt-4 flex items-center justify-center text-sm md:text-base">
                    عرض الملف الشخصي
                </Link> */}
            </div>
        </Link>
    )
}

export default TeacherCard