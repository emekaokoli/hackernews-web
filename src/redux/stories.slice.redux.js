import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../constants/api.constant';

//! i just wanted to show I can implement this with redux/toolkit as well.

export const fetchStories = createAsyncThunk(
  'fetch/stories',
  async (type, { rejectWithValue }) => {
    try {
      const response = await fetch(API);
      const { data, success } = await response.json();
      return { data, success };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// fetch api by story type of top, new, best
export const fetchStory = createAsyncThunk(
  'fetch/story',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API}/${id}`);
      const { data, success } = await response.json();
      return { data, success };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// fetch api by search text
export const fetchSearch = createAsyncThunk(
  'fetch/search',
  async (text, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API}/search?q=${text}`);
      const { data, success } = await response.json();
      return { data, success };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const postStories = createAsyncThunk(
  'postStories/postNewStories',
  async (
    { id, type, by, time, dead, kids, descendants, score, title, url },
    thunkAPI
  ) => {
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          type,
          by,
          time,
          dead,
          kids,
          descendants,
          score,
          title,
          url,
        }),
      });
      const { success, data } = await response.json();
      return { success, data };
    } catch (error) {
      return error.message;
    }
  }
);

export const storiesSlice = createSlice({
  name: 'stories',
  initialState: {
    stories: [],
    isLoading: false,
    isError: null,
    success: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStories.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
        state.success = null;
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload.success;
        state.stories = action.payload.data
          .map(
            ({
              _id,
              type,
              by,
              time,
              dead,
              kids,
              descendants,
              score,
              title,
              url,
            }) => {
              const newtime = new Date(time * 1000);
              const timeString = newtime.toLocaleString('en-NG', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'Africa/Lagos',
                second: 'numeric',
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              });
              return {
                _id,
                type,
                by,
                timeString,
                score,
                title,
                url,
                dead,
                kids,
                descendants,
              };
            }
          )
          .sort((a, b) => {
            return new Date(b.timeString) - new Date(a.timeString);
          });
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
        state.success = action.payload.success;
      });

    builder
      .addCase(postStories.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
        state.success = null;
      })
      .addCase(postStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stories.push(action.payload.data);
        state.success = action.payload.success;
      })
      .addCase(postStories.rejected, (state, action) => {
        state.isLoading = false;
        state.success = action.payload.success;
        state.isError = action.error;
      });
  },
});

export default storiesSlice.reducer;
