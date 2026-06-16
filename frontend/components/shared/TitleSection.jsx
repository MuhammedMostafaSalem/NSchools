import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const TitleSection = ({nameTitle, path}) => {
    return (
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-secondary-dark">{nameTitle}</h2>
            {
                path === "" ? null : (
                    <Link href={path} className="text-secondary-light hover:text-secondary transition flex gap-2 items-center text-[16px]">
                        <div>المزيد</div>
                        <IoIosArrowBack />
                    </Link>
                )
            }
        </div>
    )
}

export default TitleSection