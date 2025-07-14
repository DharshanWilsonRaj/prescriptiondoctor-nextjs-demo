'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ProductDetailCard({
    image,
    title,
    price,
    stock = true,
    shortDescription,
    fullDescription,
}) {
    return (
        <div className="">
            <div className="container flex flex-col md:flex-row gap-6 items-center py-5">

                {/* Image */}
                <div className="w-full md:w-[30%] flex justify-center items-start">
                    <Image
                        src={image}
                        alt={title}
                        width={200}
                        height={160}
                        placeholder="blur"
                        blurDataURL="/images/placeholder.jpg"
                        className="object-contain"
                        fetchPriority='low'
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 space-y-3">
                    <h2 className="text-2xl font-semibold text-primary">{title} <span className="text-sm font-normal text-muted-foreground">{stock ? 'In Stock' : 'Out of Stock'}</span></h2>


                    <p className="text-muted-foreground">
                        Airomir, also commonly referred to as salbutamol, is a bronchodilator reliever inhaler that is only available through a prescription in the United Kingdom (UK)
                    </p>

                    <p className="text-sm text-gray-700">
                        To buy Airomir inhalers online from Prescription Doctor, complete the online medical questionnaire to begin the consultation process. If approved before 3pm Monday to Friday, our UK pharmacy will dispense your inhaler via a next-day courier service.
                    </p>


                    {/* Price */}
                    <p className="text-lg text-primary font-semibold">Prices from <span className='text-black'>£19.99</span> </p>

                    {/* Action buttons */}
                    <div className='flex justify-center items-center space-x-2 mt-4'>
                        <Link href='#treatments' className='w-full rounded  flex items-center  justify-center px-5 py-4 min-h-[50px] bg-primary hover:bg-primary text-white'>

                            <span className="text-lg ms-auto">View Treatment</span>
                            <ArrowRight className="w-5 h-5 ms-auto" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
