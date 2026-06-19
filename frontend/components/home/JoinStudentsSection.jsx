const JoinStudentsSection = () => {
    return (
        <section className="section">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-primary-dark via-secondary to-primary-dark px-6 py-10 md:px-12 md:py-14">
                    {/* Left Icon */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 rotate-[30deg] opacity-10">
                        <svg
                            width="90"
                            height="90"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-white"
                        >
                            <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 12.18V16.18L12 20L19 16.18V12.18L12 16L5 12.18Z" />
                        </svg>
                    </div>

                    {/* Right Icon */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 rotate-[-30deg] opacity-10">
                        <svg
                            width="90"
                            height="90"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-white"
                        >
                            <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 12.18V16.18L12 20L19 16.18V12.18L12 16L5 12.18Z" />
                        </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h2 className="mb-3 text-2xl font-bold text-white md:text-4xl">
                            انضم لآلاف الطلاب المتفوقين
                        </h2>

                        <p className="mb-6 max-w-2xl text-sm text-gray-200 md:text-lg">
                            ابدأ رحلتك التعليمية اليوم واحصل على خصم 60% على جميع الدورات
                        </p>

                        <button
                            className="
                                rounded-lg
                                bg-primary
                                text-white
                                px-10
                                py-3
                                text-base
                                font-semibold
                                text-secondary-dark
                                transition
                                hover:scale-105
                            "
                            // className="rounded-lg
                            //     bg-background-soft
                            //     px-10
                            //     py-3
                            //     font-semibold
                            //     text-secondary-dark
                            //     transition-all
                            //     hover:bg-background-alt
                            // "
                        >
                            انضم الآن
                        </button>

                        <span className="mt-3 text-sm text-gray-300">
                            عرض لفترة محدودة
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinStudentsSection