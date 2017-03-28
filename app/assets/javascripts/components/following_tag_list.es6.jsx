class FollowingTagList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { followingTags: [],
                   newSugg: []
                 };
  }

  componentWillMount() {
   this.fetchTags();
  }


  fetchTags() {
    $.ajax({
      url: '/api/following_tags.json',
      method: 'GET',
      success: (data) => {
        const newTags = data.slice(0, 5)
        this.setState({
        newSugg: newTags,
        followingTags: [ ...data.slice(5), ...newTags ]});
      }
    });
  }

  render () {
    if (this.state.followingTags.length === 1) {
      return <h1>You are not following any tags.</h1>
    }

    return (
      <div>
        <a className="refresh-link pull-right" onClick={this.refreshTags.bind(this)}>Refresh</a>
        <TagList tags={this.state.newSugg} lang={this.props.loc} className="following-tag-list" />
      </div>
    );
  }

  refreshTags() {
    const newTags = this.state.followingTags.slice(0, 5);
    this.setState({
      newSugg: newTags,
      followingTags: [ ...this.state.followingTags.slice(5), ...newTags ]
    });
  }


}
