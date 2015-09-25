Navbar = React.createClass({

  render() {
    console.log(this.props);
    return (
      <div id="navbar-component">
        <img id="navbar-logo" src="/assets/apollobit_logo.png" alt="logo" height="40px"/>
        <ul>
          <li>Admin</li>
          <li>Data Enlightenment</li>
          <li>Media Dashboard</li>
        </ul>
        <div id="user-info">
          <span className="fa fa-bell fa-2x"></span>
          <span>{this.props.currentUser.username}</span>
          <img id="profile-picture" src="/assets/profile_placeholder.jpg" alt="profile picture" height="30px" />
          <AccountsUIWrapper />
        </div>
      </div>
    )
  }
})
