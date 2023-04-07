 
import { LocalStorageTypes, Person } from "@/models";
import { getItemLocalStorage, setItemLocalStorage } from "@/utilities";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState : Person[] = []
   
export const favoritesSlice = createSlice({
    name: LocalStorageTypes.FAVORITES,
    initialState: getItemLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getItemLocalStorage(LocalStorageTypes.FAVORITES) as string) : initialState,
    reducers: {  
        addFavorite: (state, action) => {
             setItemLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
             return action.payload;
        },
        removeFavorite: (state, action) => { 
                const filteredState =  current(state).filter((p: Person) => p.id !== action.payload.id);                
                setItemLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
                return filteredState;
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;