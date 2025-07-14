import ProductDetailCard from "../detail-card";

const treatmentData = [

    {
        image: "/images/treatments/atrovent.webp",
        title: "Atrovent",
        slug: 'atrovent',
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

export default function SingleProductPage() {
    const product = treatmentData[0];


    return (
        <div className="p-4">
            <ProductDetailCard {...product} />
        </div>
    );
}
