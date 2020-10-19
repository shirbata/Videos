import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };
    componentDidMount() {
        this.handleSubmit('pdf generation with react and node');
    }
    handleSubmit = async (search_Term) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet', //for showing videos
                maxResults: 5, //max videos we will get
                key: 'AIzaSyCmp8EqMzTSpvEGwjs96pCIqkz7xeDzWaM',
                q: search_Term,
            },
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    };
    render() {
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default App;
