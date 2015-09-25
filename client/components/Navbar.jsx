Navbar = React.createClass({

  render() {
    console.log(this.props);
    return (
      <div id="navbar-component">
        <img id="navbar-logo" src="/assets/apollobit_logo_white.png" alt="logo"/>
        <ul id="navigation-list">
          <li>Admin</li>
          <li>Data Enlightenment</li>
          <li>Media Dashboard</li>
        </ul>
        <div id="user-info">
          <span id="user-alerts" className="fa fa-bell"></span>
          <img id="profile-picture" src="/assets/profile_placeholder.jpg" alt="profile picture" />
          <div id="accounts-ui-component">
            <AccountsUIWrapper />
          </div>
        </div>
      </div>
    )
  }
})
