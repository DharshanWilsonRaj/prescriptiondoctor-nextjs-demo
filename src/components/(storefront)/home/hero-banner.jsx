import { PackageCheck, ShieldCheck, Truck } from "lucide-react"
import Image from "next/image"
const VerifyCheck = ({ className = '' }) => {
  return (<svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
  </svg>)
}

const widgets = [
  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Next Day Delivery",
    description: "Fast tracked delivery via DPD or Royal Mail.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Qualified Clinicians",
    description: "Unbranded and secure delivery for your privacy.",
  },
  {
    icon: <PackageCheck className="w-6 h-6 text-white" />,
    title: "Discreet Packaging",
    description: "Orders reviewed by licensed doctors & pharmacists.",
  },
  {
    icon: <VerifyCheck className="w-6 h-6 text-white" />,
    title: "All Inclusive Service",
    description: "Orders reviewed by licensed doctors & pharmacists.",
  },
]

export default function HeroBanner() {
  return (
    <>
      <section className="relative  overflow-hidden h-auto py-8 lg:py-5 md:h-[450px] flex flex-col items-center justify-end text-center
     text-white px-4 ">
        {/* Optimized Background Image with Parallax Effect */}
        <div className="absolute inset-0 -z-10 will-change-transform">
          <Image
            src="/images/hero-banner.jpg"
            alt="Hero Banner"
            fill
            quality={85}
            priority
            placeholder="blur"
            blurDataURL="/images/placeholder.jpg"
            className="object-cover object-bottom"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Content */}
        <div className="relative mb-[20px] container z-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
            UK Online Weight loss Service Convenient Healthcare
          </h1>
          <p className="text-md md:text-xl max-w-xl mx-auto drop-shadow-sm">
            Trusted by thousands across the UK. Your health, your way — discreet and quick.
          </p>
          <a href="/" className="mt-6 inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium shadow-lg transition"        >
            Start Consultation
          </a>

        </div>
        <div className='container relative mt-[50px] flex justify-center w-full text-start'>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {widgets.map((item, index) => (
              <div
                key={index}
                className={`
          flex items-start gap-2 
          ${index > 1 ? 'hidden lg:flex' : 'flex'} 
        `}
              >
                <div>{item.icon}</div>
                <div>
                  <p className="font-semibold text-white text-sm  lg:text-lg mb-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}


