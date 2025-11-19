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

export const useAppStore = create<AppState>((set, get) => ({
    userRole: 'GUEST',
    isAuthenticated: false,
    setUserRole: (role) => set({ userRole: role }),
    login: () => {
        const currentRole = get().userRole;
        // Preserve current role if it's LANDLORD or PROVIDER, otherwise default to LANDLORD
        const newRole = currentRole === 'GUEST' ? 'LANDLORD' : currentRole;
        set({ isAuthenticated: true, userRole: newRole });
    },
    logout: () => {
        const currentRole = get().userRole;
        // Preserve role on logout (don't reset to GUEST)
        set({ isAuthenticated: false, userRole: currentRole });
    },
    assessmentData: {},
    setAssessmentData: (data) => set((state) => ({ assessmentData: { ...state.assessmentData, ...data } })),
    selectedProviderId: null,
    setSelectedProviderId: (id) => set({ selectedProviderId: id }),
}));
