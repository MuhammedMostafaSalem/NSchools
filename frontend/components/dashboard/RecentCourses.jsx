const RecentCourses = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <h2 className="text-lg font-bold text-secondary mb-4">الدورات الحالية</h2>
            <div className="space-y-4">
                {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition">
                        <div>
                            <h3 className="font-bold text-secondary">{course.title}</h3>
                            <p className="text-xs text-gray-500">{course.teacher}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* شريط التقدم */}
                            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: `${course.progress}%` }}></div>
                            </div>
                            <button className="bg-primary text-white text-xs px-3 py-2 rounded-md">متابعة</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentCourses