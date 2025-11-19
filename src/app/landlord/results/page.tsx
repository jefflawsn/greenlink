'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { RECOMMENDATIONS } from '@/lib/mock-data';
import { useAppStore } from '@/lib/store';
import { ArrowRight, BarChart3, Check, Leaf, PoundSterling, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function ResultsPage() {
    const { assessmentData } = useAppStore();

    // Fallback if no data (direct navigation)
    const propertyType = assessmentData.propertyType || 'Property';
    const issues = assessmentData.issues || [];

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
