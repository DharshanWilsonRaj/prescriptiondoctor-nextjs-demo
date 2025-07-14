import TreatmentListCard from "./list";

const treatmentData = [
    {
        image: "/images/treatments/airomir.webp", // or remote image URL
        title: "Airomir",
        features: [
            "Relieves bronchospasm",
            "Pump-actuated inhaler",
            "Contains salbutamol",
        ],
        highlights: [
            { label: "Discreet delivery", emphasis: "next working day" },
            { label: "Online prescription", emphasis: "- No doctor visit" },
        ],
        price: "£19.99",
    },
    {
        image: "/images/treatments/atrovent.webp", // or remote image URL
        title: "Atrovent",
        features: [
            "Relieves bronchospasm",
            "Pump-actuated inhaler",
            "Contains salbutamol",
        ],
        highlights: [
            { label: "Discreet delivery", emphasis: "next working day" },
            { label: "Online prescription", emphasis: "- No doctor visit" },
        ],
        price: "£19.99",
    },
];

export default function Treatments() {
    return (
        <div className="max-w-5xl mx-auto space-y-6 p-4">
            {treatmentData.map((item, index) => (
                <TreatmentListCard key={index} {...item} />
            ))}
        </div>
    );
}
