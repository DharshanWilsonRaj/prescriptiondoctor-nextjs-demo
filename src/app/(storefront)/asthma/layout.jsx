import CustomBreadCrumb from "@/components/ui/custom/breadcrumb";



export default function CategoryLayout({ children }) {
    return (
        <div>
            <CustomBreadCrumb />
            {children}
        </div>

    );
}
