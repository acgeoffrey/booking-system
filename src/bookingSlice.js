import { createSlice } from '@reduxjs/toolkit';
import roomsData from './data/rooms';

const initialState = {
  user: [],
  currentUser: 'admin',
  rooms: roomsData,
  isLoading: false,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    // Set Loading state to true
    setLoading(state) {
      state.isLoading = true;
    },

    // Adding new user and setting current user
    addUser(state, action) {
      if (!state.user.includes(action.payload)) {
        state.user.push(action.payload);
      }
      state.currentUser = action.payload;
      state.isLoading = false;
    },

    // Booking slots
    bookRooms(state, action) {
      const rooms = state.rooms.map((room) => {
        if (room.id === action.payload.id) {
          return {
            ...room,
            slots: room.slots.map((slot) => {
              if (slot.id === action.payload.slotId) {
                return {
                  ...slot,
                  isTaken: state.currentUser,
                };
              } else {
                return slot;
              }
            }),
          };
        } else {
          return room;
        }
      });

      state.rooms = rooms;
      state.isLoading = false;
    },
  },
});

// Export action creators
export const { setLoading, addUser, bookRooms } = bookingSlice.actions;

// Export Reducer
export default bookingSlice.reducer;
