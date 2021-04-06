export const songsReducer = () => {
    return [
        {
            title: 'no scrubs',
            duration: '4.05'
        },
        {
            title: 'macarena',
            duration: '2.30'
        },
        {
            title: 'all star',
            duration: '3.15'
        },
        {
            title: 'i want it that day',
            duration: '1.45'
        }
    ]
}

export const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}