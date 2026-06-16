const CourseSubscribe = () => {
    return (
        <aside className="lg:col-span-4">
            <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-card p-6 border border-primary/20 flex flex-col gap-4">
                    <h1 className="text-center text-xl md:text-2xl font-bold text-secondary">
                        بطاقة التسعير والتسجيل
                    </h1>
                    <h2 className="text-center text-lg md:text-xl font-bold text-secondary">
                        سعر الدورة
                    </h2>

                    <div className="text-center">
                        <span className="text-5xl font-bold text-primary">
                            $50
                        </span>
                    </div>

                    <button className="btn-primary w-full">
                        اشترك الآن
                    </button>

                    <div className="mt-8 space-y-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                عدد الدروس
                            </span>

                            <span className="font-semibold">
                                45
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                المدة
                            </span>

                            <span className="font-semibold">
                                12 ساعة
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                الوصول
                            </span>

                            <span className="font-semibold">
                                مدى الحياة
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                الشهادة
                            </span>

                            <span className="font-semibold">
                                متاحة
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default CourseSubscribe