Navbar = React.createClass({

  renderTabs() {
    return (
      <ul>
        <li><a id="admin" href="/admin">Admin</a></li>
        <li><a id="data-enlightenment" href="/data-enlightenment">Data Enlightenment</a></li>
        <li><a id="media-dashboard" href="/media-dashboard">Media Dashboard</a></li>
      </ul>
    )
  },

  render() {
    return (
      <div id="navbar-component">
        <img id="navbar-logo" src="/assets/apollobit_logo_white.png" alt="logo"/>
        {this.renderTabs()}
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
