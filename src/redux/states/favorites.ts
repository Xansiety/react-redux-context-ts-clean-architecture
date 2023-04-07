 
import { LocalStorageTypes, Person } from "@/models";
import { getItemLocalStorage, setItemLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState : Person[] = []
   
export const favoritesSlice = createSlice({
    name: LocalStorageTypes.FAVORITES,
    initialState: getItemLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getItemLocalStorage(LocalStorageTypes.FAVORITES) as string) : initialState,
    reducers: {  
        addFavorite: (state, action) => {
             setItemLocalStorage(LocalStorageTypes.FAVORITES, state);
             return action.payload;
        }
    }
});