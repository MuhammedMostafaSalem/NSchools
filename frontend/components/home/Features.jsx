import { HiArrowPath } from "react-icons/hi2";
import { RxPeople } from "react-icons/rx";
import { PiCertificateLight } from "react-icons/pi";
import TitleSection from "../shared/TitleSection";

const Features = () => {
    const features = [
        { title: "شهادات معتمدة", desc: "احصل على شهادات موثقة عند إتمام الدورات.", icon: <PiCertificateLight /> },
        { title: "أفضل المعلمين", desc: "تعلم من خبراء محترفين في مجالاتهم.", icon: <RxPeople /> },
        { title: "تعلم مرن", desc: "ادرس في الوقت الذي يناسبك ومن أي مكان.", icon: <HiArrowPath /> },
    ];
    
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <TitleSection nameTitle="لماذا تختارنا؟" />
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="text-center flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-card">
                            <div className="text-4xl text-primary ">{f.icon}</div>
                            <h3 className="text-xl font-bold text-secondary">{f.title}</h3>
                            <p className="text-gray-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features