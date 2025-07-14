import HeroBanner from "@/components/(storefront)/home/hero-banner";
import WeightLossJourneyCard from "@/components/(storefront)/home/journey-card";
import WhyOurSite from "@/components/(storefront)/home/why-our-site-v1";
import SafetyImportance from "@/components/(storefront)/home/safety-importance";
import ServiceWorks from "@/components/(storefront)/home/service-works";

export default function StoreFrontHome() {
    return (
        <div>
            <HeroBanner />
            <WeightLossJourneyCard />
            <WhyOurSite />
            <ServiceWorks />
            <SafetyImportance />
        </div>
    );
}