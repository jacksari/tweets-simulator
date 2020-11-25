import React, {useState} from 'react';
import './SentTweets.scss'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ModalContainer from "../ModalContainer/ModalContainer";
import FormSendTweet from "../FormSendTweet/FormSendTweet";
import moment from "moment";
import {TWEETS_STORAGE} from "../../utils/constant";

function SentTweet(props) {

    const {setToast, allTweets} = props;


    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }
    const closeModal = () => {
        setIsOpenModal(false)
    }
    const sendTweet = (event, formValue) => {
        event.preventDefault();

        const {name, tweet} = formValue;
        let allTweetsArray = [];

        if(allTweets){
            allTweetsArray = allTweets;
        }

        if (!name || !tweet){
            setToast({
                open: true,
                text: 'Todos los campos son obligatorios'
            })
            setInterval(function(){
                setToast({
                    open: false
                })
            }, 2000);
        }else {
            formValue.time = moment();
            allTweetsArray.push(formValue);

            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
            //console.log('Tweet enviado correctamente')
            setToast({
                open: true,
                text: 'Tweet enviado correctamente'
            })
            closeModal();
            setInterval(function(){
                setToast({
                    open: false
                })
            }, 2000);
        }
        allTweetsArray = [];
    }

    return (
        <div className="send-tweet">
            <Fab className="send-tweet__open-modal" color="primary" aria-label="add" onClick={openModal}>
                <AddIcon />
            </Fab>

            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTweet sendTweet={sendTweet}/>
            </ModalContainer>
        </div>
    );
}

export default SentTweet;
