import React, { Component } from 'react'
import { connect } from 'react-redux'
class SongList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                songs list
            </div>
        )
    }
}

// to get data from redux store to component
// state is the object which is data stored in the redux store
// and the data  can be passed to components as props 
const mapStateToProps = (state) => {
    return {
        songs: state.songs,
        selectd: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongList)