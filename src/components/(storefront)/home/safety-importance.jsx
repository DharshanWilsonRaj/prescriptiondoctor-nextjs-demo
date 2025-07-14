import { Lock } from "lucide-react";
import { DoctorSvg, EyeSlashIcon, HospitalIcon, } from "../../../../public/images/icons/svg-icons";


const widgets = [
    {
        icon: <DoctorSvg width={50} height={50} />,
        label: "Registered prescriber",
    },
    {
        icon: <HospitalIcon width={50} height={50} />,
        label: "Registered pharmacy",
    },
    {
        icon: <Lock width={50} height={50} />,
        label: "Checkout secure",
    },
    {
        icon: <EyeSlashIcon width={50} height={50} />,
        label: "Discreet packaging",
    },
];

export default function SafetyImportance() {
    return (
        <section className="py-10 bg-secondary">
            <div className="container px-2 md:px-0 max-w-screen-xl mx-auto">
                {/* Heading */}
                <p className="text-2xl text-primary font-medium text-center mb-4">
                   Your safety is important to us 
                </p>

                {/* Description */}
                <p className="text-center mb-4 font-medium">
                    We are a completely secure site. We put in place measures and safeguards to ensure all information is safe and secure and only seen and used by healthcare professionals involved in providing healthcare service to you. All prescriptions are provided by a Registered Prescriber. All medication is dispensed by a Registered Pharmacy.
                </p>

                {/* Icon Widgets */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center text-center">
                    {widgets.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="bg-white text-primary rounded-full w-30 h-30 flex items-center justify-center mb-3">
                                {item.icon}
                            </div>
                            <p className="text-sm lg:text-lg font-medium text-primary">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
