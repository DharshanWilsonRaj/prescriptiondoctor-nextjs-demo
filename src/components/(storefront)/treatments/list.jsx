'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TreatmentListCard({ image, title, features, highlights, price, slug }) {
    const router = useRouter();

    const handleNavigate = (path) => {
        router.push(path);
    };

    return (
        <div className="border rounded-lg shadow-sm p-6 bg-white flex flex-col md:flex-row gap-6">
            {/* Product Image */}
            <div className="md:w-1/4 flex justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={160}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                    className="object-contain"
                    fetchPriority='high'
                />
            </div>

            {/* Text Section */}
            <div className="md:flex-1 flex flex-col justify-center space-y-3">
                <p className="text-xl font-semibold text-primary">{title}</p>

                <ul className="space-y-1">
                    {features.map((item, index) => (
                        <li key={index} className="flex items-start mb-2 text-sm gap-2">
                            <CheckCircle className="text-primary w-4 font-bold h-4 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Divider & Actions */}
            <div className="md:w-1/3 flex flex-col justify-center border-t md:border-t-0 md:border-l md:pl-6 pt-4 md:pt-0 space-y-3">
                <ul className="space-y-1 text-sm">
                    {highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start mb-2 gap-2">
                            <CheckCircle className="text-primary font-bold w-4 h-4 mt-0.5" />
                            <span>
                                {item.label}{" "}
                                <span className="text-primary font-medium">{item.emphasis}</span>
                            </span>
                        </li>
                    ))}
                </ul>

                <p className="text-primary font-semibold">Prices from {price}</p>

                <div className="flex gap-3">
                    <Button
                        onClick={() => handleNavigate(`/asthma/${slug}`)}
                        className="bg-primary text-white text-sm px-4 py-2 rounded flex items-center gap-1"
                        aria-label={`Start your order for ${title}`}
                    >
                        Start Order <ArrowRight />
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={() => handleNavigate(`/asthma/${slug}`)}
                        className="border text-sm px-4 py-2 rounded flex items-center gap-1"
                        aria-label={`Learn more about ${title}`}
                    >
                        More info <ArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}
