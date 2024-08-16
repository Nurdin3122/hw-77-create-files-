import React from 'react';
import {Card,CardContent, CardHeader, CardMedia, Grid, styled} from "@mui/material";
import {apiURL} from "../../../constants.ts";

interface Props {
    id: string;
    author: string;
    message:"Anonymous" | string;
    image: string | null;
}

const CardMessage:React.FC<Props> = ({id,author,message,image}) => {
    let cardImage = "";
    if (image) {
        cardImage = apiURL + '/' + "images" + "/" + image;
    }

    const ImageCardMedia = styled(CardMedia)({
        height: 0,
        paddingTop: '56.25%',
    });


    return (
        <Grid item xs={12} sm={12} md={6} lg={4}  sx={{ marginTop: 2, marginBottom: 2 }}>
            <Card sx={{height: '100%'}}>
                <CardHeader title={author}/>
                <CardContent>
                    <strong>
                        {message}
                    </strong>
                </CardContent>
                {image && <ImageCardMedia image={cardImage} title={id} />}
            </Card>
        </Grid>
    )
}

export default CardMessage