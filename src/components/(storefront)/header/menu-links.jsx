"use client"

import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { UsersIcon } from "lucide-react"

const menus = [
    {
        label: "Men's Health",
        menu_links: [
            {
                title: "Condoms",
                href: "/",
                description: "5 treatment(s) available"
            },
            {
                title: "Erectile Dysfunction",
                href: "/",
                description: "10 treatment(s) available"
            },
            {
                title: "Hair loss",
                href: "/",
                description: "3 treatment(s) available"
            },
            {
                title: "Low testosterone",
                href: "/",
                description: "2 treatment(s) available"
            },

        ],
        bottom_info: [
            {
                icon: "🔒",
                title: "Private & confidential service",
                text: "Data is kept on our systems, private and is only used by our prescribers. Your treatment sent in plain unmarked packaging."
            },
            {
                icon: "💊",
                title: "Genuine & branded medication",
                text: "We only dispatch genuine medication. Our medical team ensure you receive the correct prescription."
            },
            {
                icon: "🚚",
                title: "Next day delivery",
                text: "Order by 3pm to receive your medication the next day."
            }
        ]
    },

    {
        label: "Women's Health",
        menu_links: [
            {
                title: "Bacterial Vaginosis",
                href: "/",
                description: "3 treatment(s) available"
            },
            {
                title: "Combined Contraceptive Pill",
                href: "/",
                description: "16 treatment(s) available"
            },
            {
                title: "Contraceptive Ring",
                href: "/",
                description: "1 treatment(s) available"
            },
            {
                title: "Hair Removal",
                href: "/",
                description: "1 treatment(s) available"
            },
            {
                title: "Period Delay",
                href: "/",
                description: "4 treatment(s) available"
            },
            {
                title: "Heavy Periods (Menorrhagia)",
                href: "/",
                description: "4 treatment(s) available"
            },
            {
                title: "Menopause",
                href: "/",
                description: "14 treatment(s) available"
            },
            {
                title: "Morning After Pill",
                href: "/",
                description: "2 treatment(s) available"
            }
        ],
        bottom_info: [
            {
                icon: "🔒",
                title: "Discreet Packaging",
                text: "Your treatment is shipped in unbranded, plain packaging to ensure privacy."
            },
            {
                icon: "💬",
                title: "Expert UK Clinicians",
                text: "All orders are reviewed by registered UK doctors and pharmacists."
            },
            {
                icon: "📦",
                title: "Tracked Next-Day Delivery",
                text: "Delivered discreetly and quickly via DPD or Royal Mail."
            }
        ]
    },
    {
        label: "General Health",
        menu_links: [
            {
                title: "Allergies",
                href: "/",
                description: "10 treatment(s) available"
            },
            {
                title: "Asthma",
                href: "/",
                description: "12 treatment(s) available"
            },
            {
                title: "Cold Sores",
                href: "/",
                description: "6 treatment(s) available"
            },
            {
                title: "Constipation",
                href: "/",
                description: "12 treatment(s) available"
            },
            {
                title: "Diabetes",
                href: "/",
                description: "19 treatment(s) available"
            },
            {
                title: "Diarrhoea",
                href: "/",
                description: "5 treatment(s) available"
            },
            {
                title: "Blood Pressure Monitors",
                href: "/",
                description: "2 treatment(s) available"
            },
            {
                title: "Excessive Sweating",
                href: "/",
                description: "3 treatment(s) available"
            }
        ],
        bottom_info: [
            {
                icon: "🔐",
                title: "Private & Confidential Service",
                text: "All orders are handled discreetly and securely with plain packaging."
            },
            {
                icon: "💊",
                title: "Genuine & Branded Medication",
                text: "We only source medication from approved UK suppliers."
            },
            {
                icon: "🚚",
                title: "Next Day Delivery",
                text: "Order before 3pm to get your medication delivered next day."
            }
        ]
    },
    {
        label: "Travel Health",
        menu_links: [
            {
                title: "Antimalarials",
                href: "/",
                description: "5 treatment(s) available"
            },
            {
                title: "Jet Lag",
                href: "/",
                description: "2 treatment(s) available"
            },
            {
                title: "Traveller's Diarrhoea",
                href: "/",
                description: "3 treatment(s) available"
            },
            {
                title: "Altitude Sickness",
                href: "/",
                description: "1 treatment(s) available"
            },
            {
                title: "Travel Sickness",
                href: "/",
                description: "2 treatment(s) available"
            },
            {
                title: "Insect Bite Prevention",
                href: "/",
                description: "4 treatment(s) available"
            },
            {
                title: "Period Delay (for travel)",
                href: "/",
                description: "4 treatment(s) available"
            },
            {
                title: "Vaccination Advice",
                href: "/",
                description: "Consultation available"
            }
        ],
        bottom_info: [
            {
                icon: "🛡️",
                title: "Travel Safely",
                text: "Protection against common travel-related illnesses."
            },
            {
                icon: "🌍",
                title: "Global Coverage",
                text: "Treatments available for most international destinations."
            },
            {
                icon: "🚚",
                title: "Fast Delivery",
                text: "Get medications before your departure with next-day shipping."
            }
        ]
    },

    {
        label: "Skin Health",
        menu_links: [
            {
                title: "Acne",
                href: "/skin-health/acne",
                description: "6 treatment(s) available"
            },
            {
                title: "Rosacea",
                href: "/skin-health/rosacea",
                description: "3 treatment(s) available"
            },
            {
                title: "Eczema",
                href: "/skin-health/eczema",
                description: "2 treatment(s) available"
            },
            {
                title: "Psoriasis",
                href: "/skin-health/psoriasis",
                description: "3 treatment(s) available"
            },
            {
                title: "Fungal Nail Infections",
                href: "/skin-health/fungal-nails",
                description: "2 treatment(s) available"
            },
            {
                title: "Athlete’s Foot",
                href: "/skin-health/athletes-foot",
                description: "2 treatment(s) available"
            },
            {
                title: "Warts & Verrucas",
                href: "/skin-health/warts-verrucas",
                description: "3 treatment(s) available"
            },
            {
                title: "Cold Sores",
                href: "/skin-health/cold-sores",
                description: "4 treatment(s) available"
            }
        ],
        bottom_info: [
            {
                icon: "🧴",
                title: "Dermatologist Approved",
                text: "Treatments chosen by skin specialists for proven results."
            },
            {
                icon: "🔍",
                title: "Skin-safe Ingredients",
                text: "Medications clinically proven for common skin concerns."
            },
            {
                icon: "🚚",
                title: "Next-Day Delivery",
                text: "Delivered fast and discreetly to your door."
            }
        ]
    }
    ,
    {
        label: "Pain Relief",
        menu_links: [
            {
                title: "Migraine",
                href: "/pain-relief/migraine",
                description: "4 treatment(s) available"
            },
            {
                title: "Period Pain",
                href: "/pain-relief/period-pain",
                description: "3 treatment(s) available"
            },
            {
                title: "Joint Pain",
                href: "/pain-relief/joint-pain",
                description: "2 treatment(s) available"
            },
            {
                title: "Back Pain",
                href: "/pain-relief/back-pain",
                description: "2 treatment(s) available"
            },
            {
                title: "Muscle Pain",
                href: "/pain-relief/muscle-pain",
                description: "2 treatment(s) available"
            },
            {
                title: "Dental Pain",
                href: "/pain-relief/dental-pain",
                description: "1 treatment(s) available"
            },
            {
                title: "Headache",
                href: "/pain-relief/headache",
                description: "2 treatment(s) available"
            },
            {
                title: "Post-Surgery Pain",
                href: "/pain-relief/post-surgery",
                description: "Prescription support available"
            }
        ],
        bottom_info: [
            {
                icon: "💊",
                title: "Effective Pain Relief",
                text: "Fast-acting medications to help you feel better quickly."
            },
            {
                icon: "👨‍⚕️",
                title: "Doctor Approved",
                text: "Treatments prescribed by licensed UK doctors."
            },
            {
                icon: "📦",
                title: "Quick & Private Delivery",
                text: "Delivered next-day in discreet packaging."
            }
        ]
    }
    ,
    {
        label: "STD",
        menu_links: [
            {
                title: "Chlamydia",
                href: "/std/chlamydia",
                description: "2 treatment(s) available"
            },
            {
                title: "Genital Herpes",
                href: "/std/genital-herpes",
                description: "3 treatment(s) available"
            },
            {
                title: "Genital Warts",
                href: "/std/genital-warts",
                description: "2 treatment(s) available"
            },
            {
                title: "HIV Testing",
                href: "/std/hiv-test",
                description: "Confidential lab testing available"
            },
            {
                title: "Syphilis",
                href: "/std/syphilis",
                description: "Prescription consultation available"
            },
            {
                title: "Gonorrhoea",
                href: "/std/gonorrhoea",
                description: "2 treatment(s) available"
            },
            {
                title: "Trichomoniasis",
                href: "/std/trichomoniasis",
                description: "1 treatment(s) available"
            },
            {
                title: "Bacterial Vaginosis",
                href: "/std/bacterial-vaginosis",
                description: "3 treatment(s) available"
            }
        ],
        bottom_info: [
            {
                icon: "🔐",
                title: "Private & Confidential",
                text: "We value your privacy with secure ordering and discreet packaging."
            },
            {
                icon: "👨‍⚕️",
                title: "Approved by UK Doctors",
                text: "Treatments reviewed and prescribed by registered clinicians."
            },
            {
                icon: "📦",
                title: "Discreet Next-Day Delivery",
                text: "Delivered in plain packaging, tracked for your peace of mind."
            }
        ]
    }
    ,
]

export default function NavigationMenuDemo() {
    return (
        <div className="bg-primary hidden lg:block text-white">
            <div className="container py-0 h-[42px] mx-auto flex justify-between items-center">
                <NavigationMenu className={'w-full flex-1'}>
                    <NavigationMenuList className="flex gap-0 w-full justify-between">
                        {menus.map((menu, i) => (
                            <NavigationMenuItem key={i} className="w-fit ">
                                <NavigationMenuTrigger
                                    svg_show={false}
                                    className="border-0 px-4 w-full font-medium text-md bg-transparent text-white rounded-none"
                                >
                                    {menu.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-white text-black shadow-lg rounded-md p-4 min-w-[1170px]">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-4 w-full">
                                        {menu.menu_links.map((link, idx) => (
                                            <a key={idx} href={'/asthma'} className="block group">
                                                <h4 className="text-primary font-semibold group-hover:underline">
                                                    {link.title}
                                                </h4>
                                                <p className="text-sm text-gray-700">{link.description}</p>
                                            </a>
                                        ))}
                                    </div>

                                    {menu.bottom_info && (
                                        <div className="border-t pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                                            {menu.bottom_info.map((info, j) => (
                                                <div key={j} className="flex items-start gap-2">
                                                    <span className="text-xl">{info.icon}</span>
                                                    <div>
                                                        <h5 className="font-semibold text-black">{info.title}</h5>
                                                        <p>{info.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </NavigationMenuContent>

                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <Button className="text-white hover:bg-accent hover:text-accent-foreground   px-7  rounded-none" variant={'green'} asChild>
                    <a href="/mens-health">
                        <span className="text-lg font-semibold">Login</span>
                        <UsersIcon/>
                    </a>
                </Button>

            </div>
        </div>
    )
}

