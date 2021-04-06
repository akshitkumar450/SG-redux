import React, { Component } from 'react'
import { connect } from 'react-redux'
class SongList extends Component {
    renderList = () => {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button className='ui button primary'>select</button>
                    </div>
                    <div className='content'>
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='ui divided list'>
                {this.renderList()}
            </div>
        )
    }
}

// to get data from redux store to component
// state is the object which is data stored in the redux store
// and the data  can be passed to components as props 
const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps)(SongList)