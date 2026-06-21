import CourseDashboard from "@/components/dashboard/CourseDashboard";
import Sidebar from "@/components/shared/Sidebar";
import StudentStatsCard from "@/components/ui/StudentStatsCard";

export default function student() {
    return(
        <div
            className="px-6 pt-6 max-[767px]:pb-[80px] pb-6 space-y-6"
        >
            {/* <Sidebar /> */}
            <StudentStatsCard />
            <CourseDashboard />
        </div>
    )
}