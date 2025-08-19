import { create } from 'zustand';

interface AuthState {
  id: string;
  password: string;
  remember: boolean;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setRemember: (remember: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  id: '',
  password: '',
  remember: false,
  setId: (id) => set({ id }),
  setPassword: (password) => set({ password }),
  setRemember: (remember) => set({ remember }),
}));

export default useAuthStore;
