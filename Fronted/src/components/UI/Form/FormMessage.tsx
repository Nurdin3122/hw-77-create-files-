import React, {useState} from 'react';
import {Box, Button, Container, Grid, TextField} from "@mui/material";
import {MessageMutation} from "../../../Type.ts";
import FileInput from "../FileInput/FileInput.tsx";
import {useDispatch} from "react-redux";
import {fetchMessages, fetchMessagesPost} from "./FormMessageThunk.ts";

const emptyState:MessageMutation = {
    author:"",
    message:"",
    image:null,
}

const FormMessage = () => {
    const [newMessage, setNewMessage] = useState<MessageMutation>(emptyState);
    const dispatch = useDispatch();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    };
    const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;
        if (files) {
            setNewMessage(prevState => ({
                ...prevState, [name]: files[0]}));
        }
    };

    const onSend = async(event:React.FormEvent) => {
        event.preventDefault();
        await dispatch(fetchMessagesPost(newMessage));
        await dispatch(fetchMessages());
    }
    return (
        <>
            <Container maxWidth="sm">
                <Box component="form" onSubmit={onSend} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Author"
                        value={newMessage.author}
                        name="author"
                        onChange={onChange}
                        variant="outlined"
                    />
                    <TextField
                        label="Message"
                        value={newMessage.message}
                        name="message"
                        onChange={onChange}
                        variant="outlined"
                        required
                    />
                    <Grid item xs>
                        <FileInput
                            label="Image"
                            name="image"
                            onChange={fileInputChangeHandler}
                        />
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                        Send
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default FormMessage;