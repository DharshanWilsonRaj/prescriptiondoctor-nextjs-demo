export default function WeightLossJourneyCard() {
    const cards = [
        {
            title: "Weight Loss",
            description: "Products are available to help you kick-start your weight loss and lose weight at a sensible pace.",
            href: "#",
            className: 'col-span-12 md:col-span-6 lg:col-span-6 '
        },
        {
            title: "Smoking",
            description: "We offer effective and recognised smoking cessation treatments. Take the first step towards a healthier life.",
            href: "#",
            className: 'col-span-12 md:col-span-6 lg:col-span-6 '
        },
        {
            title: "Genital Warts",
            description: "Renew your prescription for warts treatment online with our secure consultation service.",
            href: "#",
            className: 'col-span-12 md:col-span-6 lg:col-span-4 '
        },
        {
            title: "Heartburn",
            description: "Our Doctors can provide treatment for the prevention or for the treatment of Heartburn.",
            href: "#",
            className: 'col-span-12 md:col-span-6 lg:col-span-4 '
        },
        {
            title: "Combined Contraceptive Pill",
            description: "Our specialist women’s clinic at Prescription Doctor.",
            href: "#",
            className: 'col-span-12 md:col-span-6 lg:col-span-4 '
        },
        {
            title: "Erectile Dysfunction",
            description: "Prescription Doctor offers a variety of medications to treat erectile dysfunction.",
            href: "#",
            className: 'col-span-12 md:col-span-6 lg:col-span-6 '
        },
        {
            title: "Gonorrhoea",
            description: "We deliver all our treatments in discreet packaging so nobody else knows your business.",
            href: "#",
            className: 'col-span-12 md:col-span-6 lg:col-span-6 '
        },
    ];

    return (
        <section className="bg-white">
            <div className="container pt-[60px] px-3 lg:px-0 py-5">
                <h1 className="text-2xl font-medium text-center mb-8">
                    Start Your Weight Loss Journey
                </h1>

                <div className="grid gap-6 grid-cols-12">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-[#f8f8f8]  border-b-4 border-primary shadow-sm hover:shadow-md transition p-5 ${card.className}`}
                        >
                            <p className="text-primary text-lg font-semibold mb-2">{card.title}</p>
                            <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                            <a href={card.href} className="text-primary text-sm font-medium hover:underline">
                                More Treatments »
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
