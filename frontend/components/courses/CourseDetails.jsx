import Image from "next/image";
import banner from "@/public/assets/images/python-language-banner.jpg"
import CourseDescription from "./CourseDescription"
import CourseOutline from "./CourseOutline"
import TeacherCourseDetails from "./TeacherCourseDetails"
import CourseReviews from "./CourseReviews";

const CourseDetails = () => {
    return (
        <main className="lg:col-span-8 space-y-8">
            {/* Course Image */}
            <section className="bg-white rounded-lg shadow-card overflow-hidden">
                <Image
                    src={banner}
                    alt="Python Course"
                    className="w-full h-[300px] md:h-[350px] lg:h-[440px] object-cover"
                />
            </section>

            {/* Description */}
            <CourseDescription />

            {/* Teacher */}
            <TeacherCourseDetails />

            {/* Course Outline */}
            <CourseOutline />

            {/* Reviews */}

            <div className="bg-white rounded-lg shadow-card ">
                <CourseReviews />
            </div>
        </main>
    )
}

export default CourseDetails