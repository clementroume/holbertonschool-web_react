import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getLatestNotification } from '../../utils/utils';

const initialState = {
  notifications: [],
  displayDrawer: true,
};

const API_BASE_URL = 'http://localhost:5173';
const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await axios.get('/notifications.json');
    return response.data;
  }
);

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    displayDrawer: false, // Le test attend cette propriété
  },
  reducers: {
    markAsRead: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    showDrawer: (state) => {
      state.displayDrawer = true;
    },
    hideDrawer: (state) => {
      state.displayDrawer = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      // Le test mocke des notifs et s'attend à ce que displayDrawer soit true à la fin du test ?
      // Vérifie si le test force le displayDrawer ou si c'est une conséquence du chargement
      state.notifications = action.payload;
    });
  },
});

export const { markAsRead, showDrawer, hideDrawer } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
