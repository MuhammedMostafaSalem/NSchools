import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const TitleSection = ({ title, path }) => {
    return (
        <div className={`
            flex items-center mb-8
            ${path ? "justify-between" : "justify-center"}
        `}>
            <h2 className="section-title">{title}</h2>
            {
                path ? <Link href={path}>عرض الكل</Link> : null
            }
        </div>
    )
}

export default TitleSection