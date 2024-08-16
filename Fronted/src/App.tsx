import './App.css'
import FormMessage from "./components/UI/Form/FormMessage.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchMessages} from "./components/UI/Form/FormMessageThunk.ts";
import {loadingState, messagesArray} from "./components/UI/Form/FormMessageSlice.ts";
import CardMessage from "./components/UI/CardMessage/CardMessage.tsx";

const App = () => {
    const dispatch = useDispatch();
    const messages = useSelector(messagesArray);
    const loading = useSelector(loadingState);


    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);


  return (
    <>
     <header><h1>гостевая книга</h1></header>
        <main>
            <FormMessage/>
            {loading ? <h1>Загрузка</h1> : <CardMessage/>}
        </main>
    </>
  )
};

export default App
