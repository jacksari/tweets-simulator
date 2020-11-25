import Header from "./components/header/Header";
import {Container, Snackbar} from "@material-ui/core";
import React, {useState, useEffect} from "react";
import SentTweet from "./components/SentTweet/SentTweet";
import {TWEETS_STORAGE} from "./utils/constant";
import ListTweets from "./components/ListTweets/ListTweets";

function App() {
    const [toast, setToast] = useState({
        open: false,
        text: ''
    });
    const [allTweets, setAllTweets] = useState([]);
    const [reloadTweet, setReloadTweet] = useState(false);
    useEffect(() => {
        const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
        const allTweetsArray = JSON.parse(allTweetsStorage);
        setAllTweets(allTweetsArray);
        setReloadTweet(false)
    }, [reloadTweet]);

    //console.info(allTweets);
    const deleteTweet = (index) => {
        allTweets.splice(index,1);
        setAllTweets(allTweets);
        localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
        setReloadTweet(true)
    }

    return (
    <Container className="tweets-simulator" maxWidth={false}>
        <Header/>
        <SentTweet setToast={setToast} allTweets={allTweets}/>
        <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}/>
        <Snackbar
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={toast.open}
            autoHideDuration={1000}
            message={<span id="message-id">{toast.text}</span>}
        />
    </Container>
  );
}

export default App;
