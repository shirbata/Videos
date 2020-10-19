import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetail = (props) => {
    if (!props.selectedVideo) return <div> Loading... </div>;
    console.log(props.selectedVideo);
    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h4">
                    {' '}
                    {props.selectedVideo.snippet.title}-{props.selectedVideo.snippet.channelTitle}
                </Typography>
                <Typography variant="subtitle1">{props.selectedVideo.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{props.selectedVideo.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    );
};

export default VideoDetail;
