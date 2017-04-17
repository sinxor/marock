class UserFollowContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { followerCount: this.props.followerCount };
  }

  render () {
    return (
      <div className={this.props.className}>
        <div className="following-metadata">
          <span className="following-count">
            {this.renderFollowingCount()}
          </span>
          <span className="follower-count">
            {this.renderFollowerCount()}
          </span>
        </div>
        {this.renderFollowButton()}
      </div>
    );
  }

  renderFollowingCount() {
    if (this.props.overlayTrigger) {
      return (
        <OverlayTriggerButton
          text={`<b>${this.props.followingCount}</b> ${I18n.t("Following")}`}
          apiEndpoint={`/api/following?user_id=${this.props.followed_id}`}
          overlayHeading={`${this.props.username} ${I18n.t("Isfollowing")}`} />
      );
    } else {
      return (
        <span className="following-count">
          <b>{this.props.followingCount}</b> {I18n.t("Following")}
        </span>
      );
    }
  }

  renderFollowerCount() {
    if (this.props.overlayTrigger) {
      return (
        <OverlayTriggerButton
          text={`<b>${this.state.followerCount}</b> ${I18n.t(this.pluralizeFollower())}`}
          apiEndpoint={`/api/followers?user_id=${this.props.followed_id}`}
          overlayHeading={`${this.props.username} ${I18n.t("Isfollowedby")}`} />
      );
    } else {
      return (
        <span className="follower-count">
          <b>{this.state.followerCount}</b> {I18n.t(this.pluralizeFollower())}
        </span>
      );
    }
  }

  renderFollowButton() {
    if (this.props.hideButton) { return; }

    return (
      <UserFollowButton
        following={this.props.following}
        followed_id={this.props.followed_id}
        onFollowerCountChange={this.handleFollowerCountChange.bind(this)} />
    );
  }

  handleFollowerCountChange(newCount) {
    this.setState({
      followerCount: newCount
    });
  }

  pluralizeFollower() {
    return (this.state.followerCount > 1 || this.state.followerCount === 0) ? 'Followers' : 'Follower';
  }
}


UserFollowContainer.propTypes = { following: React.PropTypes.bool,
  hideButton: React.PropTypes.bool,
  followed_id: React.PropTypes.number,
  followerCount: React.PropTypes.number,
  followingCount: React.PropTypes.number,
  username: React.PropTypes.string,
  overlayTrigger: React.PropTypes.bool
};

UserFollowContainer.defaultProps = {
  overlayTrigger: false
};
