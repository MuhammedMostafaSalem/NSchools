import RegisterForm from "@/components/Auth/RegisterForm";

export default function Register() {
    return(
        <main className="min-h-screen auth-bg-image bg-background-alt flex items-center justify-center px-4">
            <div className="w-full max-w-md mt-[120px]">
                <h1 className="text-center text-4xl font-bold text-secondary-dark mb-6">
                    إنشاء حساب
                </h1>

                <div className="bg-white rounded-lg shadow-card p-6">
                    <RegisterForm />
                </div>
            </div>
        </main>
    )
}