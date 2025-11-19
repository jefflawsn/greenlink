'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { useAppStore } from '@/lib/store';
import { PROVIDERS } from '@/lib/mock-data';
import { Calendar, FileText, MessageSquare, PieChart, Plus, Settings } from 'lucide-react';
import Link from 'next/link';

export default function LandlordDashboard() {
    const { selectedProviderId } = useAppStore();
    const provider = PROVIDERS.find(p => p.id === selectedProviderId);

    return (
        <div className="min-h-screen bg-secondary/30 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
                        <p className="text-muted-foreground">Manage your retrofits and track progress.</p>
                    </div>
                    <Link href="/landlord/assessment">
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" /> New Project
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Active Projects */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Active Retrofits</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {provider ? (
                                    <div className="border rounded-lg p-4">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="font-bold text-lg">123 Green Street - Heat Pump Installation</h3>
                                                <p className="text-sm text-muted-foreground">Provider: {provider.name}</p>
                                            </div>
                                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                                                In Progress
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="space-y-2 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span>Progress</span>
                                                <span>40%</span>
                                            </div>
                                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-[40%]" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-4 border-t pt-4">
                                            <div className="text-center">
                                                <p className="text-xs text-muted-foreground mb-1">Next Step</p>
                                                <p className="font-medium text-sm">Site Survey</p>
                                            </div>
                                            <div className="text-center border-l">
                                                <p className="text-xs text-muted-foreground mb-1">Date</p>
                                                <p className="font-medium text-sm">Nov 24, 10:00</p>
                                            </div>
                                            <div className="text-center border-l">
                                                <p className="text-xs text-muted-foreground mb-1">Est. Completion</p>
                                                <p className="font-medium text-sm">Dec 15</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-12 border-2 border-dashed rounded-lg">
                                        <p className="text-muted-foreground mb-4">No active projects yet.</p>
                                        <Link href="/landlord/assessment">
                                            <Button variant="outline">Start an Assessment</Button>
                                        </Link>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Messages & Documents */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">Recent Messages</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {provider ? (
                                            <div className="flex items-start gap-3">
                                                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs">
                                                    {provider.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">{provider.name}</p>
                                                    <p className="text-xs text-muted-foreground line-clamp-1">
                                                        Hi, could you confirm the access details for...
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-sm text-muted-foreground">No messages.</p>
                                        )}
                                        <Button variant="ghost" size="sm" className="w-full text-primary">
                                            View All Messages
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">Documents</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {['Quote #4021', 'EPC Certificate', 'Grant Application'].map((doc, i) => (
                                            <div key={i} className="flex items-center justify-between p-2 hover:bg-secondary rounded-md transition-colors cursor-pointer">
                                                <div className="flex items-center gap-2">
                                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{doc}</span>
                                                </div>
                                                <span className="text-xs text-muted-foreground">PDF</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Sidebar - Stats */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Total Impact</CardTitle>
                                <CardDescription>Across all properties</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Est. Annual Savings</p>
                                    <p className="text-2xl font-bold text-green-600">£0.00</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">CO₂ Reduced</p>
                                    <p className="text-2xl font-bold">0 Tons</p>
                                </div>
                                <div className="pt-4 border-t">
                                    <Button variant="outline" className="w-full gap-2">
                                        <PieChart className="h-4 w-4" /> View Analytics
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Upcoming</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-primary/10 p-2 rounded">
                                            <Calendar className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Site Visit</p>
                                            <p className="text-xs text-muted-foreground">Nov 24, 10:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
