const RegisterForm = () => {
    return (
        <form className="space-y-3">
            <input
                type="text"
                placeholder="الاسم بالكامل"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-primary"
            />

            <input
                type="email"
                placeholder="عنوان البريد الإلكتروني"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-primary"
            />

            <input
                type="password"
                placeholder="كلمة السر"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-primary"
            />

            <input
                type="password"
                placeholder="تأكيد كلمة السر"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-primary"
            />

            <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                    تحديد النوع
                </label>

                <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-primary">
                    <option value="student">طالب</option>
                    <option value="teacher">معلم</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-md transition"
            >
                إنشاء حساب جديد
            </button>
        </form>
    )
}

export default RegisterForm