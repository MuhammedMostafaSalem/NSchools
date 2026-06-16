const CourseDescription = () => {
    return (
        <section className="bg-white rounded-lg shadow-card p-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary-dark">وصف الكورس</h2>

            <p className="text-gray-700 leading-8 text-sm md:text-base lg:text-lg">
                تعلم لغة بايثون من الصفر وحتى الاحتراف من خلال مشروع عملي
                متكامل. ستتعرف على المتغيرات، أنواع البيانات، التحكم في التدفق，
                الدوال، التعامل مع الملفات وغيرها من المفاهيم الأساسية.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
                <li>• مقدمة عن لغة بايثون</li>
                <li>• أنواع البيانات</li>
                <li>• الجمل الشرطية والحلقات</li>
                <li>• الدوال والموديولات</li>
                <li>• مشاريع عملية</li>
            </ul>
        </section>
    )
}

export default CourseDescription