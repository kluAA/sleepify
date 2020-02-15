import React from 'react';
import { Link } from 'react-router-dom';
import { playTrack } from '../../actions/player_queue_actions';

class AlbumSongIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    const song = this.props.song;
    return (
      <div className="song" onClick={(e) => this.props.playTrack(song)}>
        <li><img className="song-photo" src={song.imageUrl} /></li>
        <li className="song-item-info">
          <p className="song-title">{song.title}</p>
          <Link to={`/open/artist/${song.artist._id}`} id={song.artist._id}>
            <p className="song-artist">{song.artist.name}</p>
          </Link>
          <div className="play-button"><i class="fas fa-play-circle"></i></div>
        </li>

      </div>
    )
  }
};

export default AlbumSongIndexItem; 