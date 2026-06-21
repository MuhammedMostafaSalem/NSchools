import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const CourseDashboard = () => {
    const courses = [
        {
            id: 1,
            title: "أساسيات لغة بايثون",
            instructor: "Martin Human",
            image:
                "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
            price: "50$",
            rating: "5.0",
            button: "ابدأ التعلم",
        },
        {
            id: 2,
            title: "تطوير الويب الشامل",
            instructor: "Martin Aplina",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
            price: "100$",
            rating: "5.0",
            button: "متابعة",
        },
    ];

    return (
        <div className="space-y-4">
            {/* Last watched */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-card p-4">
                <h2 className="text-sm md:text-lg font-bold text-secondary mb-4">
                    آخر مادة تم مشاهدتها
                </h2>

                <div className="flex items-center justify-between gap-4">
                    {/* Video Icon */}
                    <div className="w-20 h-10 md:h-20 rounded-md bg-secondary flex items-center justify-center">
                        <BsFillPlayFill
                            size={36}
                            className="text-primary fill-primary"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <h3 className="font-bold text-md md:text-lg lg:text-xl text-secondary">
                            تحليل البيانات باستخدام بايثون
                        </h3>

                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-gray-600 text-xs md:text-sm">
                                sartin Aplma
                            </span>

                            <img
                                src="https://i.pravatar.cc/40"
                                alt=""
                                className="w-6 h-6 rounded-full"
                            />
                        </div>
                    </div>

                    {/* Avatar */}
                    <img
                        src="https://i.pravatar.cc/80"
                        alt=""
                        className="w-12 md:w-16 h-12 md:h-16 rounded-full border"
                    />
                </div>

                {/* Progress */}
                <div className="mt-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-primary rounded-full" />
                    </div>

                    <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-600 text-sm md:text-md">
                            65% Completed
                        </span>

                        <button className="
                            bg-primary
                            text-white
                            px-4 md:px-6 lg:px-8
                            py-2
                            rounded-md
                            hover:opacity-90
                            transition"
                        >
                            أكمل المشاهدة
                        </button>
                    </div>
                </div>
            </div>

            {/* Courses */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-card p-4">
                <h2 className="text-sm md:text-lg font-bold text-secondary mb-4 text-right">
                    الدورات الحالية
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-36 object-cover"
                            />

                            <div className="p-3">
                                <h3 className="font-bold text-md md:text-lg text-secondary text-center">
                                    {course.title}
                                </h3>

                                <p className="text-gray-600 text-center">
                                    أساسيات
                                </p>

                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <img
                                        src="https://i.pravatar.cc/30"
                                        alt=""
                                        className="w-5 h-5 rounded-full"
                                    />

                                    <span className="text-sm text-gray-600">
                                        {course.instructor}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mt-3">
                                    <span className="font-bold text-primary">
                                        {course.price}
                                    </span>

                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-primary">
                                            {course.rating}
                                        </span>

                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                size={14}
                                                className="fill-warning text-warning"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full mt-3 bg-primary text-white py-2 rounded-md hover:opacity-90 transition text-md md:text-lg">
                                    {course.button}
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Empty Card */}
                    <div className="border border-gray-200 rounded-lg bg-background-alt flex items-center justify-center min-h-[280px]">
                        <BsThreeDots
                            size={30}
                            className="text-gray-400"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDashboard