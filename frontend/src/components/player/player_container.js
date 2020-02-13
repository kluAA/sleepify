import { connect } from 'react-redux';
import Player from './player';
import { receiveVolume } from '../../actions/player_actions';
import { fetchSongs } from '../../actions/song_actions';
import {
    playAllTracks,
    nextTrack,
    prevTrack,

} 
from '../../actions/player_queue_actions';


const mapStateToProps = state => ({
    volume: state.player.volume,
    songs: Object.values(state.entities.songs),
    currentTrack: state.queue[0],
    tracks: state.queue
});


const mapDispatchToProps = dispatch => ({
    changeVolume: volume => dispatch(receiveVolume(volume)),
    fetchSongs: () => dispatch(fetchSongs()),
    playAllTracks: (tracks) => dispatch(playAllTracks(tracks)),
    nextTrack: () => dispatch(nextTrack()),
    prevTrack: () => dispatch(prevTrack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);