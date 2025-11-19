import { create } from 'zustand';

export type UserRole = 'GUEST' | 'LANDLORD' | 'PROVIDER';

interface AppState {
    userRole: UserRole;
    setUserRole: (role: UserRole) => void;
    // Assessment Data
    assessmentData: Record<string, any>;
    setAssessmentData: (data: Record<string, any>) => void;
    // Selected Provider
    selectedProviderId: string | null;
    setSelectedProviderId: (id: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
    userRole: 'GUEST',
    setUserRole: (role) => set({ userRole: role }),
    assessmentData: {},
    setAssessmentData: (data) => set((state) => ({ assessmentData: { ...state.assessmentData, ...data } })),
    selectedProviderId: null,
    setSelectedProviderId: (id) => set({ selectedProviderId: id }),
}));
