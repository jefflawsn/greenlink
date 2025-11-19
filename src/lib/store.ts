import { create } from 'zustand';

export type UserRole = 'GUEST' | 'LANDLORD' | 'PROVIDER';

interface AppState {
    userRole: UserRole;
    setUserRole: (role: UserRole) => void;
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    // Assessment Data
    assessmentData: Record<string, any>;
    setAssessmentData: (data: Record<string, any>) => void;
    // Selected Provider
    selectedProviderId: string | null;
    setSelectedProviderId: (id: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
    userRole: 'GUEST',
    isAuthenticated: false,
    setUserRole: (role) => set({ userRole: role }),
    login: () => set({ isAuthenticated: true, userRole: 'LANDLORD' }), // Default login as Landlord
    logout: () => set({ isAuthenticated: false, userRole: 'GUEST' }),
    assessmentData: {},
    setAssessmentData: (data) => set((state) => ({ assessmentData: { ...state.assessmentData, ...data } })),
    selectedProviderId: null,
    setSelectedProviderId: (id) => set({ selectedProviderId: id }),
}));
