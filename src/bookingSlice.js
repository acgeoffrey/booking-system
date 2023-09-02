import { createSlice } from '@reduxjs/toolkit';
import roomsData from './data/rooms';

const initialState = {
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
                  isTaken: action.payload.user,
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

    // delete bookings
    remove(state, action) {
      const rooms = state.rooms.map((room) => {
        if (room.id === action.payload.id) {
          return {
            ...room,
            slots: room.slots.map((slot) => {
              if (slot.id === action.payload.slotId) {
                return {
                  ...slot,
                  isTaken: '',
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
export const { setLoading, bookRooms, remove } = bookingSlice.actions;

// Export Reducer
export default bookingSlice.reducer;
