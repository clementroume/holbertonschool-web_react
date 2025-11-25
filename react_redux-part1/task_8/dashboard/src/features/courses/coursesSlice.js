import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { logout } from '../auth/authSlice';

const API_BASE_URL = 'http://localhost:5173';

const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
};

// Async Thunk pour récupérer les cours
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await axios.get('/courses.json'); // Utiliser axios directement pour le mock
    return response.data;
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  // ATTENTION: Le test attend { courses: [] }, pas juste []
  initialState: {
    courses: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })
      // C'est ICI que le test "should CLEAR courses on logout" passe ou casse
      .addCase(logout, (state) => {
        state.courses = [];
      });
  },
});

export default coursesSlice.reducer;
