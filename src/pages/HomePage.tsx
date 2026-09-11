import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import CategoriesSection from '../components/home/CategoriesSection';
import ProblemSection from '../components/home/ProblemSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import GuaranteeSection from '../components/home/GuaranteeSection';
import WhoWeServeSection from '../components/home/WhoWeServeSection';
import ReviewsSection from '../components/home/ReviewsSection';
import PartnersSection from '../components/home/PartnersSection';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Liquid Ko Space | Foodservice Supply Gauteng</title>
        <meta name="description" content="Everything your food business needs. One call. One scheduled delivery. Built for independent food businesses across Gauteng." />
      </Helmet>
      <main>
        <HeroSection />
        <ReviewsSection />
        <CategoriesSection />
        <HowItWorksSection />
        <WhoWeServeSection />
        <ProblemSection />
        <WhyChooseUsSection />
        <GuaranteeSection />
        <PartnersSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
