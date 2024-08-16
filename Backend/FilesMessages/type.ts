export interface MessageT {
    id:number
    author:"Anonymous"|string;
    message:string;
    img:File | null
}

export interface MessageTWithoutId {
    author:"Anonymous" | string;
    message:string;
    img:File | null
}