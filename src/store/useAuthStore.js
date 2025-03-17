import {create} from 'zustand' ;
import axiosInstance from '../lib/axios.js';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';


export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,

  checkAuth: async() => {
    try {
        const res = await axiosInstance.get('/auth/check');

        set({authUser:res.data})
    } catch (error) {
        console.log("Error in checkAuth:", error);
        set({authUser: null})
    } finally {
        set({isCheckingAuth: false});
    }
  },

  signup: async (formData) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", formData);
      set({ authUser: res.data });
      toast.success("Account created successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

}));