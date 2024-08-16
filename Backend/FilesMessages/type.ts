export interface MessageT {
    id:string
    author:"Anonymous"|string;
    message:string;
    image: string | null;
}

export interface MessageTWithoutId {
    author:"Anonymous" | string;
    message:string;
    image: string | null;
}