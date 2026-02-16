
import HomeFooter from "@/components/HomeFooter";
import FAQSection from "@/components/meetup-page/FaqSection";
import MeetupHeader from "@/components/meetup-page/MeetupHeader";
import NetworkExchangeHero from "@/components/meetup-page/NetworkExchange";
import RegistrationSection from "@/components/meetup-page/RegistrationSection";
import ServicesSection from "@/components/meetup-page/ServicesSection";
import TradeNetworkSection from "@/components/meetup-page/TradeNetworkSection";
import { LanguageProvider } from "@/context/LanguageContext";



export default function MeetupPage() {
  return (
    <LanguageProvider>
      <div>
        <MeetupHeader />
        <NetworkExchangeHero />
        <ServicesSection />
        <RegistrationSection />
        <TradeNetworkSection />
        <FAQSection />
        <HomeFooter />
      </div>
    </LanguageProvider>
  );
}
