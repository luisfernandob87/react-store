import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {setIsLoading} from './isLoading.slice';
import getConfig from '../../utils/getConfig';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setFavorites: (state, action) =>{
            const favorites = action.payload;
            return favorites;
        }
    }
})

export const getPurchasesThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`, getConfig())
        .then((res) => dispatch(setFavorites(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setFavorites } = purchasesSlice.actions;

export default purchasesSlice.reducer;