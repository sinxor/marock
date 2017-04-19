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
    let followmessage = I18n.t("followmessage");
    let refresh = I18n.t("refresh");
    if (this.state.followingTags.length < 1) {
      return <h1>{followmessage}</h1>
    }

    return (
      <div>
      <a className="refresh-link pull-right" onClick={this.refreshTags.bind(this)}>{refresh}</a>
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
