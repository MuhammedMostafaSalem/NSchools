import Image from "next/image"
import Link from "next/link";
import heroImage from "@/public/assets/images/online-learning-hero.png";

const HeroSection = () => {
    return (
        // <section className="bg-background-alt">
        //     <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
        //         {/* Text Content */}
        //         <div className="flex-1 text-center md:text-start">
        //             <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark leading-tight mb-6">
        //                 ابدأ رحلة تعليمية جديدة اليوم
        //             </h1>
        //             <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
        //                 اكتشف آلاف الدورات التي يقدمها أفضل المعلمين في جميع المجالات.
        //             </p>
        //             <Link href="/courses" className="btn-primary text-lg px-8 py-3">
        //                 استعرض المواد
        //             </Link>
        //         </div>

        //         {/* Image Content */}
        //         <div className="flex-1 w-full max-w-lg">
        //             <Image
        //                 src={heroImage}
        //                 alt="Education Illustration"
        //                 width={600}
        //                 height={400}
        //                 priority // To ensure the image is loaded quickly for better performance
        //                 className="w-full h-auto"
        //             />
        //         </div>
        //     </div>
        // </section>

        
        <section className="bg-background-alt overflow-hidden">
            <div className="container mx-auto px-6 pt-[80px] md:pt-[120px] flex flex-col-reverse md:flex-row items-center gap-10">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-start pb-8">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary-dark leading-tight mb-6">
                        ابدأ رحلة تعليمية جديدة اليوم
                    </h1>

                    <p className="text-[16px] md:text-[18px] text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                        اكتشف آلاف الدورات التي يقدمها أفضل المعلمين في جميع المجالات.
                    </p>

                    <Link
                        href="/courses"
                        className="btn-primary text-[15px] md:text-[16px] px-[20px] py-[10px] md:px-8 md:py-3"
                    >
                        استعرض المواد
                    </Link>
                </div>

                {/* Image Content */}
                <div className="flex-1 flex justify-center items-end self-end">
                    <Image
                        src={heroImage}
                        alt="Education Illustration"
                        priority
                        className="w-full h-auto"
                    />
                </div>

            </div>
        </section>
    )
}

export default HeroSection