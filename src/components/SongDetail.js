import React from 'react'
import { connect } from 'react-redux'

const SongDetail = (props) => {
    return (
        <div>
            {props.selectedSong && <h3>{props.selectedSong.title}</h3>}
            {props.selectedSong && <h4>{props.selectedSong.duration}</h4>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}
export default connect(mapStateToProps)(SongDetail)