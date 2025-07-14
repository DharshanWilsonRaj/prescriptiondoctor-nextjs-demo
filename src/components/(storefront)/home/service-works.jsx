import { PlusIcon } from "lucide-react";

export default function ServiceWorks() {
    return (
        <div>
            <div className="container  flex items-center justify-center py-4">
               
                    <p className="text-2xl ms-auto text-primary font-medium text-center">
                        How  Service Works
                    </p>
                    <span className='ms-auto'>
                        <PlusIcon className="text-primary" tooltip="How" />
                    </span>
              
            </div>
        </div>
    );
}