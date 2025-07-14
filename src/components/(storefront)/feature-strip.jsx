import { File, Lock, Truck, VerifiedIcon } from 'lucide-react';
import React from 'react';

export default function FeatureStrip() {
    const options = [
        {
            icon: <Lock className="w-6 h-6 mb-1 text-white" />,
            label: 'Discreet and private service',
        },
        {
            icon: <VerifiedIcon className="w-6 h-6 mb-1 text-white" />,
            label: 'Easy Access to branded medication',
        },
        {
            icon: <File className="w-6 h-6 mb-1 text-white" />,
            label: 'No prescription required',
        },
        {
            icon: <Truck className="w-6 h-6 mb-1 text-white" />,
            label: 'Next day delivery available',
        },
    ];

    return (
        <div className="bg-primary text-white py-3 hidden md:block">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {options.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            {item.icon}
                            <p className="text-[12px] font-medium text-white">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
