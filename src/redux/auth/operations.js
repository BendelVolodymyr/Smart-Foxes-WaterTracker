import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://smart-foxes-backend-watertracker.onrender.com/api';

// axios.defaults.baseURL = 'http://localhost:3000/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const signUp = createAsyncThunk('auth/signup', async (userData, thunkAPI) => {
    console.log(userData);
    try {
        const response = await axios.post('/users/register', userData);
        token.set(response.data.token);
        console.log(response);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const signIn = createAsyncThunk('auth/signin', async (userData, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', userData);

        console.log(response);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk('/logout', async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/logout');

        console.log(response);
        token.unset();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     console.log('NO TOKEN');
//     return thunkAPI.rejectWithValue('Unable to fetch user');
//   }
//   token.set(persistedToken);
//   try {
//     const response = await axios.get('users/current');

//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
        console.log('UNAUTHORIZED');
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
        token.set(persistedToken);
        const result = await axios.get('/users/current');
        return result.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const uploadAvatar = createAsyncThunk('auth/avatar', async (formData, thunkAPI) => {
    try {
        const {
            data: { avatarURL },
        } = await axios.patch('/users/avatars', formData);

        return avatarURL;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const updateUserInfo = createAsyncThunk('auth/info', async (formData, thunkAPI) => {
    try {
        const response = await axios.patch('/users', formData);

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

//!Второй вариант саки для аватарки

// export const avatar = createAsyncThunk(
//   'auth/avatar',
//   async (data, thunkAPI) => {
//     try {
//       const formData = new FormData();
//       formData.append('avatar', data); // Предполагается, что 'data' - это файл аватарки
//       const response = await axios.patch('/users/login', formData);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
