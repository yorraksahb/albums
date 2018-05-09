import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({albums: responseData});
            });
    }

    renderAlbum() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render(){
        console.log(this.state);
        return (
            <View>
                {this.renderAlbum()}
            </View>
        );
    }
}

export default AlbumList;