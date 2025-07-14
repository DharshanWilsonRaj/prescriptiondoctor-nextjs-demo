import WeightLossJourneyCard from "@/components/(storefront)/home/journey-card";
import StoreFrontHome from "./(storefront)/home";
export const metadata = {
  title: "Doctor | UK Online Healthcare & Treatments",
  description:
    "Get safe, fast, and discreet access to UK-licensed treatments online. Prescription Doctor connects you with registered UK clinicians for secure consultations and next-day delivery.",
  keywords: [
    "online doctor",
    "UK prescriptions",
    "discreet healthcare",
    "next-day delivery treatment",
    "online pharmacy UK",
    "health consultation",
    "medication",
  ],
  openGraph: {
    title: "Doctor | UK Online Healthcare & Treatments",
    description:
      "Get safe, fast, and discreet access to UK-licensed treatments online. Next-day delivery with trusted UK clinicians.",
    url: "https://dev-prescriptiondoctor-nextjs-demo.vercel.app",
    siteName: "Doctor",
    images: [
      {
        url: "https://dev-prescriptiondoctor-nextjs-demo.vercel.app/images/social-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor Hero",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor | UK Online Healthcare & Treatments",
    description:
      "Order licensed medication online and receive fast, discreet delivery across the UK. Reviewed by UK clinicians.",
    images: ["https://dev-prescriptiondoctor-nextjs-demo.vercel.app/images/social-banner.jpg"],
  },
};


export default function Home() {

  return (
    <>
      <StoreFrontHome />
      <WeightLossJourneyCard />
    </>
  );
}
