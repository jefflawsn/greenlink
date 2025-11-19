'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { useAppStore, UserRole } from '@/lib/store';
import { cn } from '@/lib/utils';
import { Leaf, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
    const pathname = usePathname();
    const { userRole, setUserRole, isAuthenticated, login, logout } = useAppStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/resources', label: 'Resources' },
    ];

    const landlordLinks = [
        { href: '/landlord/dashboard', label: 'Dashboard' },
        { href: '/landlord/assessment', label: 'Assessment' },
        { href: '/landlord/marketplace', label: 'Marketplace' },
    ];

    const providerLinks = [
        { href: '/provider/dashboard', label: 'Dashboard' },
        { href: '/provider/profile', label: 'Profile' },
    ];

    const activeLinks =
        userRole === 'LANDLORD' ? [...navLinks, ...landlordLinks] :
            userRole === 'PROVIDER' ? [...navLinks, ...providerLinks] :
                navLinks;

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <Leaf className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground">GreenLink</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {activeLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    pathname === link.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Role Switcher & Auth (Mock) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center space-x-1 bg-secondary/50 p-1 rounded-full border border-secondary">
                            {(['LANDLORD', 'PROVIDER'] as UserRole[]).map((role) => (
                                <button
                                    key={role}
                                    onClick={() => setUserRole(role)}
                                    className={cn(
                                        "px-3 py-1.5 text-xs font-medium rounded-full transition-all",
                                        userRole === role
                                            ? "bg-white shadow-sm text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {role.charAt(0) + role.slice(1).toLowerCase()}
                                </button>
                            ))}
                        </div>
                        <Button size="sm" onClick={isAuthenticated ? logout : login}>
                            {isAuthenticated ? 'Log Out' : 'Sign In'}
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-muted-foreground hover:text-foreground"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {activeLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "block px-4 py-3 rounded-lg text-base font-medium",
                                    pathname === link.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-border mt-4">
                            <p className="px-4 text-xs font-medium text-muted-foreground mb-3">Switch View</p>
                            <div className="flex space-x-2 px-4 mb-4">
                                {(['LANDLORD', 'PROVIDER'] as UserRole[]).map((role) => (
                                    <button
                                        key={role}
                                        onClick={() => setUserRole(role)}
                                        className={cn(
                                            "flex-1 px-2 py-2 text-xs font-medium rounded-lg border transition-colors",
                                            userRole === role
                                                ? "bg-primary text-primary-foreground border-primary"
                                                : "border-border text-muted-foreground"
                                        )}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                            <div className="px-4">
                                <Button className="w-full" onClick={() => {
                                    isAuthenticated ? logout() : login();
                                    setIsMenuOpen(false);
                                }}>
                                    {isAuthenticated ? 'Log Out' : 'Sign In'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
