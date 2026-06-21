import SidebarLayout from "@/components/layouts/SidebarLayout";

export default function Layout({ children }) {
    return (
        <>
            <SidebarLayout childrenProp={children} />
        </>
    );
}
