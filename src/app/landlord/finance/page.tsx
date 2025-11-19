'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { GRANTS } from '@/lib/mock-data';
import { Calculator, Coins, Landmark } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function FinanceContent() {
    const [postcode, setPostcode] = useState('');
    const [showResults, setShowResults] = useState(false);
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get('auto')) {
            setPostcode('SW1A 1AA'); // Mock pre-filled postcode from assessment
            setShowResults(true);
        }
    }, [searchParams]);

    const handleSearch = () => {
        if (postcode) setShowResults(true);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tight mb-4">Green Finance Hub</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Discover grants, subsidies, and green loans available in your area to help fund your renovation projects.
                </p>
            </div>

            {/* Search Box */}
            <Card className="mb-12">
                <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-4 items-end">
                        <div className="flex-1 w-full">
                            <label className="text-sm font-medium mb-2 block">Enter your postcode to find local grants</label>
                            <Input
                                placeholder="e.g. SW1A 1AA"
                                value={postcode}
                                onChange={(e) => setPostcode(e.target.value)}
                            />
                        </div>
                        <Button size="lg" onClick={handleSearch} className="w-full md:w-auto">
                            Search Grants
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {showResults && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-2xl font-bold">Available Funding</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {GRANTS.map((grant) => (
                            <Card key={grant.id} className="border-l-4 border-l-primary">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle>{grant.name}</CardTitle>
                                        <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                                            Active
                                        </span>
                                    </div>
                                    <CardDescription>{grant.eligibility}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{grant.description}</p>
                                    <div className="flex items-center gap-2 text-lg font-bold text-primary">
                                        <Coins className="h-5 w-5" />
                                        {grant.amount}
                                    </div>
                                    <Button variant="outline" className="w-full mt-4">Check Eligibility</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Payback Calculator Mock */}
                    <Card className="bg-primary/5 border-primary/20 mt-8">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Calculator className="h-6 w-6 text-primary" />
                                <CardTitle>Quick Payback Calculator</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Investment</p>
                                    <p className="text-2xl font-bold">£12,000</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Grant Coverage</p>
                                    <p className="text-2xl font-bold text-green-600">- £7,500</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
                                    <p className="text-2xl font-bold">3.5 Years</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}

export default function FinancePage() {
    return (
        <div className="min-h-screen bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<div>Loading...</div>}>
                <FinanceContent />
            </Suspense>
        </div>
    );
}
