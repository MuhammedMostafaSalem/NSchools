import Image from "next/image"
import Link from "next/link";
import heroImage from "@/public/assets/images/online-learning-hero.png";
import avatar1 from "@/public/assets/images/avatar-1.jpg";
import avatar2 from "@/public/assets/images/avatar-2.jpg";
import avatar3 from "@/public/assets/images/avatar-3.jpg";
import avatar4 from "@/public/assets/images/avatar-4.jpg";

const HeroSection = () => {
    return (
        <section className="bg-[#FAFAFB] overflow-hidden">
            <div className="container mx-auto px-6 min-h-[450px] flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-10">
                {/* Content */}
                <div className="flex-1 text-center max-w-xl md:mt-[50px]">
                    {/* text */}
                    <h1 className="text-secondary-dark font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
                        ابدأ رحلة تعليمية جديدة اليوم
                    </h1>

                    <p className="text-gray-600 text-md md:text-lg leading-8 mb-10 max-w-[420px] mx-auto">
                        اكتشف آلاف الدورات التي يقدمها أفضل المعلمين
                        في جميع المجالات.
                    </p>

                    <Link
                        href="/courses"
                        className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 h-[58px] px-10 text-lg"
                    >
                        استكشاف الدورات
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center justify-center gap-4 mt-10">

                        <div className="flex -space-x-3 space-x-reverse">
                            <Image
                                src={avatar1}
                                alt="avatar-1"
                                className="rounded-full w-[35px] h-[35px] border-2 border-gray-200"
                            />
                            <Image
                                src={avatar2}
                                alt="avatar-2"
                                className="rounded-full w-[35px] h-[35px] border-2 border-gray-200"
                            />
                            <Image
                                src={avatar3}
                                alt="avatar-3"
                                className="rounded-full w-[35px] h-[35px] border-2 border-gray-200"
                            />
                            <Image
                                src={avatar4}
                                alt="avatar-4"
                                className="rounded-full w-[35px] h-[35px] border-2 border-gray-200"
                            />
                        </div>


                        <span className="text-gray-600 text-sm">
                            تقييم الطلاب
                        </span>

                        <div className="flex items-center gap-2">
                            <span className="text-warning text-xl">★</span>
                            <span className="font-semibold text-gray-700">
                                4.9/5
                            </span>
                        </div>

                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex-1 flex justify-center self-end">
                    <Image
                        src={heroImage}
                        alt="Online Learning"
                        priority
                        className="w-full h-auto md:h-[350px] lg:h-auto"
                    />
                </div>

            </div>
        </section>
    )
}

export default HeroSection