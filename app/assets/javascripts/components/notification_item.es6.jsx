class NotificationItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { unread: this.props.unread };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      unread: nextProps.unread
    });
  }

  render () {
    return (
      <li
        className={this.state.unread ? 'unread-notification' : ''}
        onClick={() => this.handleMarkAsRead()}>
        {this.renderShit()}
      </li>
    );
  }

  renderShit(){

    let loc = I18n.locale;
    if(this.props.type === "response")
      filteredtype = "post";
    else
      filteredtype = this.props.type;

    return (
    <a href={`/${loc}/${filteredtype}s/${this.props.slug}`}>
      <span dangerouslySetInnerHTML={{ __html: this.props.actor_avatar_img_tag }} />
      <div className="notification-metadata">
        {this.notificationContent()}
        <br/>
        <small>{this.notificationIcon()} {this.props.time_ago}</small>
      </div>
    </a>
    );
  }
  notificationContent() {
    const { actor, action, type } = this.props;
    let traction = I18n.t(action);
    let trtype = I18n.t(type);
    switch (type) {
      case 'post':
        return `${actor} ${traction} ${trtype}`;
      case 'user':
        return `${actor} ${traction}`;
      case 'response':
        return `${actor} ${traction} ${trtype}`;
    }
  }

  // FIXME: this is tightly coupled to action.
  notificationIcon() {
    switch(this.props.action) {
      case 'likenotif':
        return <i className="fa fa-heart-o"></i>;
      case 'follownotif':
        return <i className="fa fa-user"></i>;
      case 'responsenotif':
      case 'alsocommentnotif':
        return <i className="fa fa-commenting-o"></i>;
    }
  }

  handleMarkAsRead(id) {
    $.ajax({
      url: `/api/notifications/${this.props.id}/mark_as_read`,
      method: 'POST',
      dataType: 'json',
      success: () => {
        this.setState({
          unread: false
        });
      }
    });
  }
}
