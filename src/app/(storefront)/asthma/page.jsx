import FeatureStrip from '@/components/(storefront)/feature-strip';
import ServiceWorks from '@/components/(storefront)/service-works';
import Treatments from '@/components/(storefront)/treatments/treatments';
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';
import React from 'react';


export default function CategoryPage() {
    return (
        <div>
            <div className=' py-5'>
                <div className='max-w-[700px]  mx-auto text-center flex flex-col space-y-3 items-center'>
                    <h1 className='text-2xl md:text-3xl text-primary font-medium'>
                        Asthma
                    </h1>
                    <p className='mb-2 font-medium'>
                        Asthma is a common lung condition which causes occasional and often debilitating breathing difficulties.
                    </p>
                    <p className='mb-2 font-medium'>
                        Prescription Doctor can offer treatment for asthma that can be delivered safely and discreetly directly to your home.

                    </p>
                    <p className='mb-2 font-medium'>
                        To learn more about the causes and treatments of asthma, continue reading. Alternatively, you can proceed to the medical form below.
                    </p>
                </div>
                <div className='flex justify-center items-center space-x-2 mt-4'>
                    <Link href='#treatments' className='w-full rounded md:w-[500px] flex items-center  justify-center px-5 py-4 min-h-[50px] bg-primary hover:bg-primary text-white'>

                        <span className="text-lg ms-auto">View Treatment</span>
                        <ArrowRight className="w-5 h-5 ms-auto" />

                    </Link>
                </div>

            </div>

            <FeatureStrip />
            <div className="bg-secondary py-2">
                <ServiceWorks />
            </div>

            <div id='treatments'>
                <Treatments />
            </div>
        </div>
    )
}