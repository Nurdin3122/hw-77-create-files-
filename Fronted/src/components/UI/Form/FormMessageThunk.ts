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


        const response = await axiosApi.post<Message>('/messages',formData);
        return response.data;
    }
);

export const fetchMessages = createAsyncThunk<Message[]>(
    'messages/fetchMessages',
    async () => {
        const response = await axiosApi.get<Message[] | null>('/messages');
        const messages = Object.keys(response.data).map(id => ({
            ...response.data[id],
            id,
        }))
        return messages ?? [];
    }
);