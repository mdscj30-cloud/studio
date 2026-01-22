import { SERVICES } from '@/lib/constants';
import { Briefcase, BookUser, FileCheck } from 'lucide-react';

export type LocationService = {
    slug: string;
    city: string;
    service: {
        key: string;
        title: string;
        slug: string;
        Icon: React.ElementType;
    };
};

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

const CITIES = {
    tier1: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Gurgaon", "Noida"],
    tier2: ["Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Varanasi", "Surat"],
    tier3: ["Chandigarh", "Coimbatore", "Kochi", "Mysore", "Guwahati", "Bhubaneswar", "Jodhpur", "Dehradun", "Raipur", "Ranchi", "Gwalior", "Jabalpur", "Madurai", "Salem", "Tiruchirappalli", "Jamshedpur", "Udaipur", "Allahabad", "Amritsar", "Vijayawada"],
};

export const ALL_CITIES = [...CITIES.tier1, ...CITIES.tier2, ...CITIES.tier3];

export const TARGETED_SERVICES = [
    { key: 'virtual-cfo', title: 'Virtual CFO Services', slug: 'virtual-cfo', Icon: Briefcase },
    { key: 'gst-consultant', title: 'GST Consultant', slug: 'regulatory-compliances', Icon: FileCheck },
    { key: 'income-tax', title: 'Income Tax Services', slug: 'regulatory-compliances', Icon: FileCheck },
    { key: 'bookkeeping', title: 'Bookkeeping Services', slug: 'bookkeeping', Icon: BookUser },
    { key: 'roc-compliance', title: 'ROC Compliance', slug: 'regulatory-compliances', Icon: FileCheck },
];

function generateLocationServicePages(): LocationService[] {
    const pages: LocationService[] = [];
    ALL_CITIES.forEach(city => {
        TARGETED_SERVICES.forEach(service => {
            pages.push({
                slug: `${slugify(service.title)}-${slugify(city)}`,
                city: city,
                service: service,
            });
        });
    });
    return pages;
}

export const LOCATION_SERVICE_PAGES: LocationService[] = generateLocationServicePages();
