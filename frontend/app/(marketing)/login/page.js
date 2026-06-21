import LoginForm from "@/components/Auth/LoginForm";
import Link from "next/link";

export default function Login() {
    return (
        <main className="min-h-screen auth-bg-image bg-background-alt flex items-center justify-center px-4">
            <div className="w-full max-w-md mt-[120px]">
                <h1 className="text-center text-4xl font-bold text-secondary-dark mb-6">
                    تسجيل الدخول
                </h1>
                <div className="bg-white rounded-lg shadow-card p-6">

                    <LoginForm />
                    <Link href="/student/dashboard">student</Link>
                </div>
            </div>
        </main>
    )
}