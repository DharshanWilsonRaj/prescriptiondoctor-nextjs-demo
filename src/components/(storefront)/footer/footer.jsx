"use client";

const footerLinks = [
    {
        title: "Policies",
        links: [
            "Privacy Policy",
            "Terms & Conditions",
            "Anti-Spam Policy",
            "Linking Policy",
            "Refunds & Returns",
            "Editorial Policy",
            "Cookie Policy",
            "Data Sharing Policy",
        ],
    },
    {
        title: "Customer Service",
        links: [
            "Complaints",
            "Copyright Notice",
            "Data & Payment Security",
            "Medical Disclaimer",
            "Patient Agreement",
        ],
    },
    {
        title: "Help",
        links: [
            "FAQ",
            "Customer Service",
            "About us",
            "How we work",
            "Delivery",
            "Blog",
            "Facebook",
            "Twitter",
        ],
    },
    {
        title: "Popular Treatments",
        links: [
            "Weight Loss",
            "Stop Smoking",
            "Gonorrhoea Treatment",
            "Thrush",
            "Acid Reflex",
            "Period Delay",
        ],
    },
];

export default function StoreFrontFooter() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="container mx-auto w-full px-4 py-8 grid grid-cols-1 sm:grid-cols-4 gap-8">
                {/* Looping Menu */}
                {footerLinks.map((column, index) => (
                    <div key={index}>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                            {column.title}
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-sm">
                            {column.links.map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:underline hover:text-primary">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Regulation + Payment Icons
                <div className="space-y-6">
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                            How We Are Regulated
                        </h2>
                        <div className="space-y-2">
                            <img
                                src="/images/registered-pharmacy-badge.png"
                                alt="Registered Pharmacy"
                                className="h-6"
                            />
                            <img
                                src="/images/dmca-badge.png"
                                alt="DMCA Protected"
                                className="h-6"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">
                            Payment Options
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "visa",
                                "mastercard",
                                "maestro",
                                "american-express",
                                "apple-pay",
                                "google-pay",
                            ].map((img, i) => (
                                <img
                                    key={i}
                                    src={`/images/payments/${img}.png`}
                                    alt={img}
                                    className="h-6"
                                />
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
        </footer>
    );
}
