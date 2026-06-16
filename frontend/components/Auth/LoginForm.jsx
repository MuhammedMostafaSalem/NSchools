import { IoMdEyeOff } from "react-icons/io";
import { FaKey, FaUser } from "react-icons/fa";

const LoginForm = () => {
    return (
        <form className="space-y-4">
            {/* Username */}
            <div>
                <label className="block text-sm text-gray-700 mb-2">
                    البريد إلكتروني
                </label>

                <div className="relative">
                    <FaUser
                        size={18}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                        type="text"
                        className="w-full h-12 pr-10 pl-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            {/* Password */}
            <div>
                <label className="block text-sm text-gray-700 mb-2">
                    كلمة السر
                </label>

                <div className="relative">
                    <FaKey
                        size={18}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                        type="password"
                        className="w-full h-12 pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <IoMdEyeOff
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                    />
                </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">

                <button
                    type="button"
                    className="text-primary hover:text-primary-dark"
                >
                    هل نسيت كلمة السر؟
                </button>
            </div>

            {/* Login Button */}
            <button
                type="submit"
                className="w-full h-12 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark transition"
            >
                تسجيل الدخول
            </button>
        </form>
    )
}

export default LoginForm