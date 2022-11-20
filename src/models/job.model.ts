export interface Job {
    id: string;
    name: string;
    email: string;
    phone: string;
    title: string;
    address: string;
    salary: string;
    benefits: string[];
    location: {
        lat: number;
        long: number;
    };
    pictures: string[];
    description: string;
    employment_type: string[];
    createdAt: string;
    postedAgo?: string;
    salaryBoundaries?: string[];
    responsibilities?: string;
    benefitsDetails?: string[];
}