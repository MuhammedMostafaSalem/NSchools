import HeroSection from "@/components/home/HeroSection";
import FeaturedTeachers from "@/components/home/FeaturedTeachers";
import TopCourses from "@/components/home/TopCourses";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedTeachers />
      <TopCourses />
      <Features />
    </main>
  );
}
