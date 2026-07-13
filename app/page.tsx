import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/shared/Footer";
import ResumeUpload from "@/components/dashboard/ResumeUpload";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
      <ResumeUpload />
    </>
  );
}