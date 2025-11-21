'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { PROVIDERS } from '@/lib/mock-data';
import { useAppStore } from '@/lib/store';
import { Search, Star, MapPin, ShieldCheck, Filter } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MarketplacePage() {
    const router = useRouter();
    const { setSelectedProviderId } = useAppStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const filteredProviders = PROVIDERS.filter(provider => {
        const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesService = selectedService ? provider.services.includes(selectedService) : true;
        return matchesSearch && matchesService;
    });

    const allServices = Array.from(new Set(PROVIDERS.flatMap(p => p.services)));

    const handleSelectProvider = (id: string) => {
        setSelectedProviderId(id);
        router.push('/landlord/booking');
    };

    return (
        <div className="min-h-screen bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2">Find Certified Providers</h1>
                        <p className="text-muted-foreground">Compare quotes and reviews from vetted professionals.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" className="gap-2">
                            <Filter className="h-4 w-4" /> Filters
                        </Button>
                    </div>
                </div>

                {/* Search & Filters */}
                <div className="bg-background p-4 rounded-lg border shadow-sm mb-8 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by name or keyword..."
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                        <button
                            onClick={() => setSelectedService(null)}
                            className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${selectedService === null
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                }`}
                        >
                            All Services
                        </button>
                        {allServices.map(service => (
                            <button
                                key={service}
                                onClick={() => setSelectedService(service)}
                                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${selectedService === service
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Provider Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProviders.map((provider) => (
                        <Card key={provider.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-lg">{provider.name}</h3>
                                        {provider.verified && (
                                            <ShieldCheck className="h-4 w-4 text-blue-500" aria-label="Verified" />
                                        )}
                                    </div>
                                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-xs font-bold">
                                        <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
                                        {provider.rating ?? 'N/A'} ({provider.reviews ?? 'N/A'})
                                    </div>
                                </div>
                                <div className="flex items-center text-muted-foreground text-sm mb-2">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {provider.location}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {provider.services.map(s => (
                                        <span key={s} className="bg-secondary px-2 py-1 rounded text-xs font-medium">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {provider.description}
                                </p>
                                <div className="mt-4 text-sm font-medium">
                                    Price Range: <span className="text-foreground">{provider.priceRange}</span>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-4 border-t bg-secondary/10">
                                <Button className="w-full" onClick={() => handleSelectProvider(provider.id)}>
                                    Request Quote
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
