import ProductDetailCard from "../detail-card";

const treatmentData = [
    {
        image: "/images/treatments/airomir.webp",
        title: "Airomir",
        slug: 'airomir',
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

export default function SingleProductPage({ params }) {
    // const { slug } = params;

    // const product = treatmentData.find(item => item.slug === slug);

    // if (!product) {
    //     return <div className="p-10 text-center text-red-500">Product not found</div>;
    // }

    const product = treatmentData[0];

    return (
        <div className="p-4">
            <ProductDetailCard {...product} />
        </div>
    );
}
