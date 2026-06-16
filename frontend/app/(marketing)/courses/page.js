import CoursesComponent from "@/components/courses/CoursesComponent";
import TitleSection from "@/components/shared/TitleSection";
import FilterBar from "@/components/ui/FilterBar";
import Pagination from "@/components/ui/Pagination";

export default function Courses() {
    return (
        <main className="container mx-auto px-6 py-12">
            <div className="flex justify-between mt-[120px]">
                <TitleSection nameTitle="الدورات المتاحة" />
                <FilterBar />
            </div>


            <CoursesComponent />

            <Pagination />
        </main>
    )
}