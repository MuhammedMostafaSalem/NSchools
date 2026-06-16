import Image from "next/image"
import logo from "@/public/assets/images/Logo_Light.png"


const Footer = () => {
    return (
        <footer className="bg-secondary-dark text-white py-12">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div className="col-span-2">
                    <Image src={logo}
                        alt="NSchools Logo"
                        width={65}
                        height={65}
                        className="h-auto w-auto"
                    />
                    <p className="text-gray-400">منصتك الأولى للتعلم الرقمي والتطور المهني.</p>
                </div>
                <div>
                    <h4 className="font-bold mb-4">روابط سريعة</h4>
                    <ul className="text-gray-400 space-y-2">
                        <li>من نحن</li>
                        <li>اتصل بنا</li>
                        <li>الشروط والأحكام</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">تواصل معنا</h4>
                    <p className="text-gray-400">info@nschools.com</p>
                </div>
            </div>
            <div className="text-center mt-12 border-t border-gray-700 pt-6 text-gray-500">
                © 2026 جميع الحقوق محفوظة لمنصة NSchools
            </div>
        </footer>
    )
}

export default Footer