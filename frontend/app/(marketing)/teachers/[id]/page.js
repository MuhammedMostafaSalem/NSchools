import banner from "@/public/assets/images/python-language-banner.jpg"
import TeacherProfile from "@/components/teachers/TeacherProfile";

export default function TeacherDetailsPage() {
    const courses = [
        {
            id: 1,
            title: "أساسيات لغة بايثون",
            image: banner,
            students: 1200,
            price: "$50",
        },
        {
            id: 2,
            title: "تحليل البيانات باستخدام بايثون",
            image: banner,
            students: 850,
            price: "$70",
        },
        {
            id: 3,
            title: "مشاريع عملية ببايثون",
            image: banner,
            students: 620,
            price: "$60",
        },
        {
            id: 4,
            title: "مشاريع عملية ببايثون",
            image: banner,
            students: 620,
            price: "$60",
        },
    ];

    return (
        <main className="min-h-screen bg-white pt-10">
            <div className="bg-background-soft h-[300px] mt-[50px]"></div>
            <div className="container mx-auto px-4 relative -mt-52 mb-10 z-10">
                <TeacherProfile courses={courses} />
            </div>
        </main>
    )
}