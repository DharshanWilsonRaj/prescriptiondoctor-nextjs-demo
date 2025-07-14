
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Phone, HelpCircle, Info, Star, Search, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const StoreFrontHeader = () => {
    return (
        <header className="w-full border-b bg-white">
            <div className="container  mx-auto h-20 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-2 lg:px-0">
                {/* Logo + Mobile Menu */}
                <div className="flex w-full items-center justify-between md:w-auto">
                    <Image
                        src="/logo.svg"
                        alt="Prescription Doctor"
                        width={196}
                        height={65}
                        priority
                    />

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger  title={'menu'}>
                                <Menu className=" text-primary" size={'30px'}/>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-72 p-3">
                                <div className="flex flex-col gap-4 mt-6 text-primary font-semibold">
                                    <Link href="/" className="flex items-center gap-2 hover:underline">
                                        <Phone className="w-5 h-5" />
                                        0208 1917477
                                    </Link>
                                    <Link href="/" className="flex items-center gap-2 hover:underline">
                                        <HelpCircle className="w-5 h-5" />
                                        FAQ
                                    </Link>
                                    <Link href="/" className="flex items-center gap-2 hover:underline">
                                        <Info className="w-5 h-5" />
                                        Customer Service
                                    </Link>
                                    <Link href="/" className="flex items-center gap-2 hover:underline">
                                        <Star className="w-5 h-5" />
                                        Reviews
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
                <div className="flex items-center gap-8 flex-1 justify-end">
                    {/* Search Input (centered on desktop, full width on mobile) */}
                    <div className="relative w-full max-w-md  hidden lg:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary w-5 h-5 " />
                        <Input
                            type="text"
                            placeholder="Search for your condition or medication"
                            className="pl-10  h-[50px]"
                        />
                    </div>

                    {/* Desktop Contact/Links */}
                    {/* <div className="hidden  md:grid grid-cols-2 gap-x-6 gap-y-5 text-primary text-md font-semibold">
                        <div className="flex flex-1 items-center gap-2">
                            <Phone className="w-5 h-5" />
                            <span>0208 1917477</span>
                        </div>
                        <Link href="/" className="flex items-center gap-2  w-fit hover:underline">
                            <HelpCircle className="w-5 h-5" />
                            FAQ
                        </Link>
                        <Link href="/" className="flex items-center gap-2 hover:underline">
                            <Info className="w-5 h-5" />
                            Customer Service
                        </Link>
                        <Link href="/" className="flex items-center  w-fit gap-2 hover:underline">
                            <Star className="w-5 h-5" />
                            Reviews
                        </Link>
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default StoreFrontHeader
