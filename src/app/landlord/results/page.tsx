'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { RECOMMENDATIONS, PROVIDERS } from '@/lib/mock-data';
import { useAppStore } from '@/lib/store';
import { ArrowRight, BarChart3, Leaf, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ResultsPage() {
    const { assessmentData } = useAppStore();

    // Fallback if no data (direct navigation)
    const propertyType = assessmentData.propertyType || 'Property';
    const issues = assessmentData.issues || [];
    const postcode = (assessmentData.postcode || '').toUpperCase();

    const ISSUE_SERVICE_MAP: Record<string, string[]> = {
        'Damp or Mold': ['Damp Proofing', 'Ventilation'],
        'Drafty Windows': ['Windows', 'Doors'],
        'High Energy Bills': ['Insulation', 'Solar', 'Heat Pumps'],
        'Cold Rooms': ['Insulation', 'Heating'],
        'Noise Pollution': ['Windows'],
        'Old Boiler': ['Heat Pumps', 'Heating'],
    };

    const requestedServices = new Set<string>();
    issues.forEach((issue: string) => {
        (ISSUE_SERVICE_MAP[issue] || ['Insulation']).forEach(service => requestedServices.add(service));
    });
    if (requestedServices.size === 0) {
        ['Insulation', 'Heat Pumps'].forEach(service => requestedServices.add(service));
    }
    const requestedServicesList = Array.from(requestedServices);

    const inferredCity =
        postcode.startsWith('M') ? 'Manchester' :
            postcode.startsWith('N') || postcode.startsWith('E') || postcode.startsWith('W') || postcode.startsWith('S') || postcode.startsWith('L') ? 'London' :
                undefined;

    const providersByService = PROVIDERS.filter(provider =>
        provider.services.some(service => requestedServices.has(service))
    );

    const prioritizedProviders =
        inferredCity
            ? (providersByService.filter(provider => provider.location === inferredCity).length
                ? providersByService.filter(provider => provider.location === inferredCity)
                : providersByService)
            : providersByService;

    const topProviders = prioritizedProviders.slice(0, 6);
    const providerHeading = requestedServicesList.slice(0, 3).join(', ') || 'energy upgrades';

    return (
        <div className="min-h-screen bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Diagnostic Results</h1>
                    <p className="text-muted-foreground">
                        Based on your assessment for <span className="font-medium text-foreground">{propertyType}</span>
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Potential Annual Savings</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-primary">£1,370</div>
                            <p className="text-xs text-muted-foreground mt-1">+15% increase in property value</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">CO₂ Reduction</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-primary">4.2 Tons</div>
                            <p className="text-xs text-muted-foreground mt-1">Equivalent to planting 200 trees</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">EPC Rating Potential</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-end gap-2">
                                <div className="text-3xl font-bold text-orange-500">D</div>
                                <ArrowRight className="h-6 w-6 mb-1 text-muted-foreground" />
                                <div className="text-3xl font-bold text-green-600">B</div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">After recommended upgrades</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Recommendations List */}
                <h2 className="text-xl font-bold mb-6">Recommended Upgrades</h2>
                <div className="space-y-6">
                    {RECOMMENDATIONS.map((rec, i) => (
                        <Card key={rec.id} className="overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="p-6 flex-1">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-xl font-semibold">{rec.title}</h3>
                                                {rec.priority === 'High' && (
                                                    <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full font-medium">
                                                        High Priority
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-muted-foreground">{rec.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Est. Cost</p>
                                            <p className="font-medium">{rec.estimatedCost}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Annual Savings</p>
                                            <p className="font-medium text-green-600">{rec.annualSavings}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Impact</p>
                                            <div className="flex items-center gap-1">
                                                <BarChart3 className="h-4 w-4 text-primary" />
                                                <span className="font-medium">{rec.impact}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">CO₂ Saved</p>
                                            <div className="flex items-center gap-1">
                                                <Leaf className="h-4 w-4 text-green-600" />
                                                <span className="font-medium">{rec.co2Reduction}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-secondary/50 p-6 flex flex-col justify-center items-center md:w-64 border-t md:border-t-0 md:border-l">
                                    <Link href="/landlord/marketplace" className="w-full">
                                        <Button className="w-full mb-3">Find Installers</Button>
                                    </Link>
                                    <Link href="/landlord/finance?auto=true" className="w-full">
                                        <Button variant="outline" className="w-full">Check Grants</Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Matching Providers */}
                <div className="mt-16">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-xl font-bold">Matching Providers</h2>
                            <p className="text-sm text-muted-foreground">
                                We hand-picked specialists for the {providerHeading.toLowerCase()} needs you highlighted{inferredCity ? ` near ${inferredCity}` : ''}.
                            </p>
                        </div>
                        <Link href="/landlord/marketplace">
                            <Button variant="outline" size="sm" className="gap-2">
                                Explore Marketplace <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    {topProviders.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {topProviders.map((provider) => (
                                <Card key={provider.id} className="h-full">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <CardTitle className="text-lg">{provider.name}</CardTitle>
                                                <CardDescription>{provider.services.join(' • ')}</CardDescription>
                                            </div>
                                            {provider.rating && (
                                                <div className="text-xs font-semibold bg-yellow-50 text-yellow-800 px-2 py-1 rounded">
                                                    {provider.rating.toFixed(1)} ★ ({provider.reviews ?? 'New'})
                                                </div>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground">
                                            {provider.description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <span>{provider.location}</span>
                                            <span>{provider.reviews ? `${provider.reviews} reviews` : 'New listing'}</span>
                                        </div>
                                        <Link href="/landlord/marketplace">
                                            <Button size="sm" className="w-full gap-2">
                                                <MessageSquare className="h-4 w-4" /> Book Intro Call
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <Card className="bg-secondary/40 border-dashed">
                            <CardContent className="py-10 text-center">
                                <p className="text-sm text-muted-foreground">
                                    We couldn’t find an exact specialist for this combination yet.
                                    Visit the marketplace to browse all verified installers.
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link href="/landlord/dashboard">
                        <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                            Skip to Dashboard
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
