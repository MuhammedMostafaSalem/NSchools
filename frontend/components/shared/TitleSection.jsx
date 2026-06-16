import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const TitleSection = ({nameTitle}) => {
    return (
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-dark">{nameTitle}</h2>
        </div>
    )
}

export default TitleSection