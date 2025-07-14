import { PlusIcon } from "lucide-react";

export default function ServiceWorks() {
    return (
        <div>
            <div className="container px-2  flex items-center justify-between sm:justify-center py-4">

                <p className="text-2xl sm:ms-auto  text-primary font-medium text-center">
                    How  Service Works
                </p>
                <span className=' ms-auto px-3'>
                    <PlusIcon className="text-primary" tooltip="How" />
                </span>

            </div>
        </div>
    );
}