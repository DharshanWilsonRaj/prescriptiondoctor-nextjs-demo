import {
    Lock,
    BadgeCheck,
    FileText,
    Truck
} from "lucide-react";

const features = [
    {
        icon: <Lock className=" text-primary" size={40} />,
        text: "Healthcare professionals provide a private and discreet service",
    },
    {
        icon: <BadgeCheck className=" text-primary" size={40} />,
        text: "Access to branded prescription medication",
    },
    {
        icon: <FileText className=" text-primary" size={40} />,
        text: "Prescriptions provided by a registered prescriber",
    },
    {
        icon: <Truck className=" text-primary " size={40} />,
        text: "Next day delivery available on orders",
    },
];

export default function WhyOurSite() {
    return (
        <section className="bg-secondary py-12">
            <div className="container  px-4 md:px-8">
                <p className="text-2xl text-primary font-medium text-center mb-8">
                    Why our site
                </p>

                <div className="flex  items-center justify-center">
                    <ul className="flex flex-col justify-center  gap-10 border-l-2 min-h-[360px] border-gray-300  relative pl-6">
                        {features.map((curr, idx) => (
                            <li className="relative flex mb-3 items-center gap-4" key={idx}>
                                {/* Timeline Dot */}
                                <span className="absolute left-[-33px] top-2 w-4 h-4 bg-gray-500 rounded-full border-2"></span>

                                {/* Icon */}
                                <div className=" text-gray-600">{curr.icon}</div>

                                {/* Text */}
                                <p className="text-gray-800 md:text-base text-sm">{curr.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    );
}
