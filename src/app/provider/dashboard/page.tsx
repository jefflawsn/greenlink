'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { BarChart3, Calendar, CheckCircle2, DollarSign, MessageSquare, Users } from 'lucide-react';
import { useState } from 'react';

const leads = [
    { name: 'Sarah Jenkins', type: 'Heat Pump', loc: 'London SW1', status: 'New', budget: '£9,500', timeline: 'Install within 6 weeks', notes: '3-bed terraced house, wants ASHP + cylinder replacement.' },
    { name: 'Mike Ross', type: 'Insulation', loc: 'Bristol BS1', status: 'Contacted', budget: '£6,200', timeline: 'Survey booked for next Tuesday', notes: 'Requesting loft + cavity insulation combo.' },
    { name: 'David Kim', type: 'Solar', loc: 'London E1', status: 'Quoted', budget: '£11,800', timeline: 'Awaiting customer approval', notes: '6kW rooftop system with 10kWh battery.' },
];

export default function ProviderDashboard() {
    const [selectedLead, setSelectedLead] = useState(leads[0]);

    return (
        <div className="min-h-screen bg-secondary/30 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Provider Dashboard</h1>
                        <p className="text-muted-foreground">Overview of your business performance.</p>
                    </div>
                    <Button>Update Availability</Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Revenue', value: '£12,450', icon: DollarSign, change: '+12%' },
                        { label: 'Active Projects', value: '8', icon: CheckCircle2, change: '+2' },
                        { label: 'New Leads', value: '24', icon: Users, change: '+5' },
                        { label: 'Avg. Rating', value: '4.9', icon: BarChart3, change: '0.1' },
                    ].map((stat, i) => (
                        <Card key={i}>
                            <CardContent className="p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                                    <span className="text-xs text-green-600 font-medium">{stat.change} from last month</span>
                                </div>
                                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <stat.icon className="h-5 w-5" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Leads */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Recent Leads</CardTitle>
                            <CardDescription>Potential clients matching your services.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {leads.map((lead, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center font-bold text-muted-foreground">
                                                {lead.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-medium">{lead.name}</p>
                                                <p className="text-xs text-muted-foreground">{lead.type} • {lead.loc}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-xs px-2 py-1 rounded font-medium ${lead.status === 'New' ? 'bg-green-100 text-green-800' :
                                                    lead.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {lead.status}
                                            </span>
                                            <Button size="sm" variant="ghost" onClick={() => setSelectedLead(lead)}>
                                                View
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {selectedLead && (
                                <div className="mt-6 p-5 border rounded-xl bg-white shadow-sm">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Lead detail</p>
                                            <h4 className="text-xl font-semibold">{selectedLead.name}</h4>
                                        </div>
                                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                                            {selectedLead.type}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Location</p>
                                            <p className="font-medium">{selectedLead.loc}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Budget</p>
                                            <p className="font-medium">{selectedLead.budget}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Timeline</p>
                                            <p className="font-medium">{selectedLead.timeline}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Status</p>
                                            <span className={`text-xs px-2 py-1 rounded font-semibold inline-flex ${selectedLead.status === 'New' ? 'bg-green-100 text-green-800' :
                                                    selectedLead.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {selectedLead.status}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-4">{selectedLead.notes}</p>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        <Button size="sm" className="gap-2">
                                            <MessageSquare className="h-4 w-4" /> Send Message
                                        </Button>
                                        <Button size="sm" variant="outline" className="gap-2">
                                            <Calendar className="h-4 w-4" /> Schedule Survey
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Schedule */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Today's Schedule</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { time: '09:00 AM', title: 'Site Survey - 123 Green St', type: 'Visit' },
                                    { time: '11:30 AM', title: 'Video Consultation', type: 'Call' },
                                    { time: '02:00 PM', title: 'Installation - 45 Park Ave', type: 'Work' },
                                ].map((event, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="flex flex-col items-center">
                                            <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                                            {i !== 2 && <div className="w-0.5 h-full bg-border mt-1" />}
                                        </div>
                                        <div className="pb-4">
                                            <p className="text-xs text-muted-foreground font-medium">{event.time}</p>
                                            <p className="text-sm font-medium">{event.title}</p>
                                            <span className="text-xs bg-secondary px-1.5 py-0.5 rounded text-muted-foreground">
                                                {event.type}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
