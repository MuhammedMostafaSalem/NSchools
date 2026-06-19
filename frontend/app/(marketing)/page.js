import HeroSection from "@/components/home/HeroSection";
import HomeTeachers from "@/components/home/HomeTeachers";
import HomeCourses from "@/components/home/HomeCourses";
import HomeFeatures from "@/components/home/HomeFeatures";
import WhyNSchools from "@/components/home/WhyNSchools";
import JoinStudentsSection from "@/components/home/JoinStudentsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeCourses />
      <HomeTeachers />
      <HomeFeatures />
      <WhyNSchools />
      <JoinStudentsSection />
    </main>
  );
}
