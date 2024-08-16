export interface Message {
    id:string
    author: string;
    message:"Anonymous" | string;
    image: File | null;
}

export interface MessageMutation {
    author: string;
    message:"Anonymous" | string;
    image: File | null;
}



