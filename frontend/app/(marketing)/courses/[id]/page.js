import CourseDetails from "@/components/courses/CourseDetails";
import CourseSubscribe from "@/components/courses/CourseSubscribe";

export default function CourseDetailsPage() {
    return (
        <main className="bg-background min-h-screen mt-[80px]">
            <div className="container mx-auto px-4 py-10">
                {/* Title */}
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-10">
                    أساسيات لغة بايثون - الدورة المكثفة
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content */}
                    <CourseDetails />

                    {/* Sidebar Subscribe */}
                    <CourseSubscribe />
                </div>
            </div>
        </main>
    )
}