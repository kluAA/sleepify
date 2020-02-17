import React from 'react';
import { Link } from 'react-router-dom';

class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songLiked: null,
        }
        this.toggleLike = this.toggleLike.bind(this);
        this.renderLike = this.renderLike.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUserId);
    }

    toggleLike() {
        const likeData = {
            songId: this.props.currentTrack._id,
            userId: this.props.currentUserId,
        }
        this.props.toggleLike(likeData)
        this.setState({
            songLiked: this.props.currentUser.likedSongs.includes(this.props.currentTrack._id)
        })
    }

    renderLike() {
        if(this.props.currentUser && this.state.songLiked) {
            return (
                <i className="fas fa-heart"></i>
            )
        } else {
            return (
                <i className="far fa-heart"></i>
            )
        }
    }

    render() {
        
        const { currentTrack, nextTrack } = this.props
        if (!currentTrack) return <div className="pi-container"></div>;
        let msg;
        
        if (this.props.shuffle) {
            msg = "Currently shuffling... ¯\\_(ツ)_/¯"
        } else if (!nextTrack) {
            msg = null;
        } else {
            msg = `Coming up next: ${nextTrack.title} By ${nextTrack.artist.name}`;
        }
        
        return (
            <div className="pi-container">
                <img className="pi-image" src={currentTrack.imageUrl} />
                <div className="pi-details">
                    <Link>
                        <div className="pi-details-title">
                            { currentTrack.title }
                        </div>
                    </Link>
                    <Link>
                        <div className="pi-details-artist">
                            {currentTrack.artist.name}
                        </div>
                    </Link>
                    {nextTrack ? <div className="pi-details-next">{msg}</div> : null }
                </div>
                <div onClick={this.toggleLike}>
                    {this.renderLike()};
                </div>
            </div>
        )
    }
}

export default PlayerInfo;