import './App.css'
import FormMessage from "./components/UI/Form/FormMessage.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchMessages} from "./components/UI/Form/FormMessageThunk.ts";
import {loadingState, messagesArray} from "./components/UI/Form/FormMessageSlice.ts";
import CardMessage from "./components/UI/CardMessage/CardMessage.tsx";
import {AppDispatch} from "./Redux/store.ts";

const App = () => {
    const dispatch:AppDispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages);
    console.log(messages)
    const loading = useSelector(loadingState);


    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);


  return (
    <>
     <header><h1>гостевая книга</h1></header>
        <main>
            <FormMessage/>
            {loading ? <h1>Загрузка</h1> :(
                messages.map(mess => (
                    <CardMessage
                        key={mess.id}
                        id={mess.id}
                        author={mess.author}
                        message={mess.message}
                        image={mess.image}
                    />
                )))}
        </main>
    </>
  )
};

export default App
