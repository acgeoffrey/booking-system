import { createSlice } from '@reduxjs/toolkit';
import roomsData from './data/rooms';

const initialState = {
  user: [],
  currentUser: '',
  rooms: roomsData,
  isLoading: false,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    addUser(state, action) {
      if (!state.user.includes(action.payload)) {
        state.user.push(action.payload);
      }
      state.currentUser = action.payload;
      state.isLoading = false;
    },
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
              }
            }),
          };
        }
      });

      state.rooms = rooms;
      state.isLoading = false;
    },
  },
});

export const { setLoading, addUser, bookRooms } = bookingSlice.actions;
export default bookingSlice.reducer;
