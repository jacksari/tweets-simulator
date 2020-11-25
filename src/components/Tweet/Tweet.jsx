import React from 'react';
import './Tweet.scss';
import {Card, CardContent} from '@material-ui/core'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import moment from "moment";

function Tweet(props) {
    const {
        tweet: {name, tweet, time}, deleteTweet,index
    } = props;
    return (
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h5>{name}</h5>
                    <DeleteTwoToneIcon onClick={() => deleteTweet(index)}/>
                </div>
                <p>{tweet}</p>
                <div className="tweet__date-add-tweet">
                    {moment(time).format('DD/MM/YYYY HH:mm')}
                </div>
            </CardContent>
        </Card>
    );
}

export default Tweet;
