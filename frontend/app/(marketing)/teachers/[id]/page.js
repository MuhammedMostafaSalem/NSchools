import banner from "@/public/assets/images/python-language-banner.jpg"
import TeacherProfile from "@/components/teachers/TeacherProfile";
import img from "@/public/assets/images/teacher.jpg"

export default function TeacherDetailsPage() {
    const courses = [
        {
            id: 1,
            title: "تعلم React.js من الصفر",
            description:
                "دورة شاملة لتعلم React.js وبناء تطبيقات حديثة.",
            image: img,
            instructor: "أحمد محمد",
            rating: 4.8,
            students: 120,
            price: 299,
            slug: "react-course",
        },
        {
            id: 2,
            title: "تعلم React.js من الصفر",
            description:
                "دورة شاملة لتعلم React.js وبناء تطبيقات حديثة.",
            image: img,
            instructor: "أحمد محمد",
            rating: 4.8,
            students: 120,
            price: 299,
            slug: "react-course",
        },
        {
            id: 3,
            title: "تعلم React.js من الصفر",
            description:
                "دورة شاملة لتعلم React.js وبناء تطبيقات حديثة.",
            image: img,
            instructor: "أحمد محمد",
            rating: 4.8,
            students: 120,
            price: 299,
            slug: "react-course",
        },
        {
            id: 4,
            title: "تعلم React.js من الصفر",
            description:
                "دورة شاملة لتعلم React.js وبناء تطبيقات حديثة.",
            image: img,
            instructor: "أحمد محمد",
            rating: 4.8,
            students: 120,
            price: 299,
            slug: "react-course",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <div className="bg-background-soft h-[300px]"></div>
            <div className="container mx-auto px-4 relative -mt-52 mb-10 z-10">
                <TeacherProfile courses={courses} />
            </div>
        </main>
    )
}