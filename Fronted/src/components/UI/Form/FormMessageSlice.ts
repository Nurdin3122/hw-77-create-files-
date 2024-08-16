import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Message} from "../../../Type.ts";
import {RootState} from "../../../Redux/store.ts";
import {fetchMessages} from "./FormMessageThunk.ts";

export interface MessageState {
    messages:Message[];
    loading:boolean;
    error:boolean;
}


export const initialState:MessageState = {
    messages:[],
    loading:false,
    error:false,
}

export const MessageSlice = createSlice<MessageState>({
    name:"messages",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchMessages.pending,(state) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchMessages.fulfilled,(state,action:PayloadAction<Message[]>) => {
            state.loading = false;
            state.messages = action.payload
        })
        builder.addCase(fetchMessages.rejected,(state) => {
            state.loading = false;
            state.error = true;
        })
    }
});

export const productsReducer = MessageSlice.reducer;
export const messagesArray = (state: RootState) => state.messages.messages;
export const loadingState = (state: RootState) => state.messages.loading;