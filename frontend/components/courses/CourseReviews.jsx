const CourseReviews = () => {
    return (
        <section className="bg-white rounded-lg shadow-card p-6 flex flex-col space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary-dark">التقييمات</h2>

            <div className="space-y-5">
                <div className="border rounded-md p-4">
                    <h4 className="font-semibold text-secondary">
                        Ahmed Mohamed
                    </h4>

                    <div className="text-warning my-2">
                        ★★★★★
                    </div>

                    <p className="text-gray-700 text-sm md:text-base">
                        شرح ممتاز ومنظم جداً، ساعدني أبدأ في البرمجة
                        بشكل احترافي.
                    </p>
                </div>

                <div className="border rounded-md p-4">
                    <h4 className="font-semibold text-secondary">
                        Sara Ali
                    </h4>

                    <div className="text-warning my-2">
                        ★★★★★
                    </div>

                    <p className="text-gray-700 text-sm md:text-base">
                        محتوى عملي ومفيد جداً للمبتدئين.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CourseReviews