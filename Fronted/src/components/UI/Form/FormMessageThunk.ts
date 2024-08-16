import {createAsyncThunk} from "@reduxjs/toolkit";
import {Message, MessageMutation} from "../../../Type.ts";
import axiosApi from "../../../axiosApi.ts";



export const fetchMessagesPost = createAsyncThunk<void,MessageMutation>(
    'messages/fetchMessagesPost',
    async (newMessage) => {

        const formData = new FormData();
        formData.append('author', newMessage.author);
        formData.append('message', newMessage.message);
        if (newMessage.image) {
            formData.append('image', newMessage.image);
        }
        const keys = Object.keys(newMessage) as (keyof MessageMutation)[];
        keys.forEach(key => {
            const value = newMessage[key];
            if (value !== null) {
                formData.append(key, value);
            }
        });


        const response = await axiosApi.post<Message>('/messages',formData);
        return response.data;
    }
);

export const fetchMessages = createAsyncThunk<Message[]>(
    'messages/fetchMessages',
    async () => {
        const response = await axiosApi.get<Message[] | null>('/messages');
        const contacts = Object.keys(response.data).map(id => ({
            ...response.data[id],
            id,
        }))
        return contacts ?? [];
    }
);