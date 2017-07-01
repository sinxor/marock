class FollowSuggestionsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      activeUsers: []
    };
  }

  componentWillMount() {
    this.fetchUsers();
    this.token = PubSub.subscribe('UserFollowButton:onClick', (message, data) => {
      this.removeUser(data.followed_id)
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  fetchUsers() {
    $.ajax({
      url: '/api/follow_suggestions.json',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log(data);
        const newActives = data.slice(0, 3)
        this.setState({
          activeUsers: newActives,
          users: [ ...data.slice(3), ...newActives ]
        });
      }
    });
  }

  render () {
    let refresh = I18n.t("refresh");
    let suggestions = I18n.t("peopletofollow");
    return (
      <div className="">
        <div className="suggestions-header">
          <h4 className="small-heading">{suggestions}</h4>
          <a className="refresh-link pull-right" onClick={this.refreshActiveUsers.bind(this)}>{refresh}</a>
        </div>
        <div>
          {this.renderSuggestions()}
        </div>
      </div>
    );


  }

  renderSuggestions() {
     let alldone = I18n.t("alldone");
     if (this.state.users.length === 0) {
       return <h5> {alldone} </h5>
     }
     return this.state.activeUsers.map(user => {
       return <SuggestionItem key={user.id} {...user} lang={this.props.loc} />
     });
  }

  refreshActiveUsers() {
    const newActives = this.state.users.slice(0, 3);
    this.setState({
      activeUsers: newActives,
      users: [ ...this.state.users.slice(3), ...newActives ]
    });
  }

  removeUser(id) {
    const filteredUsers = this.state.users.filter(user => {
      if (user.id === id) {
        removedUser = user;
      }
      return user.id !== id;
    });

    this.setState({
      users: filteredUsers
    });
  }

}
