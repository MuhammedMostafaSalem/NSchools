import TeachersHero from "@/components/teachers/TeachersHero";
import TeachersFilters from "@/components/teachers/TeachersFilters";
import TeachersComponent from "@/components/teachers/TeachersComponent";
import Pagination from "@/components/ui/Pagination";

export default function TeachersPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="container mx-auto px-4 py-10 space-y-10 mt-[80px]">
                <TeachersHero />
                <TeachersFilters />
                <TeachersComponent />
                <Pagination />
            </div>
        </div>
    )
}