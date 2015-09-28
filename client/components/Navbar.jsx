Navbar = React.createClass({

  makeActive(e) {
    var allTabs = document.getElementsByClassName("navigation-tab")
    for (var i = 0; i < allTabs.length; i++) {
      var tab = allTabs[i]
      tab.setAttribute("class", "navigation-tab")
    }
    e.target.setAttribute("class", "navigation-tab active")
  },

  render() {
    return (
      <div id="navbar-component">
        <img id="navbar-logo" src="/assets/apollobit_logo_white.png" alt="logo"/>
        <ul>
          <li>
            <a className="navigation-tab" id="admin" href="/admin" onClick={this.makeActive}>Admin</a>
          </li>
          <li>
            <a className="navigation-tab active" id="data-enlightenment" onClick={this.makeActive} href="/data-enlightenment">Data Enlightenment</a>
          </li>
          <li>
            <a className="navigation-tab" id="media-dashboard" onClick={this.makeActive} href="/media-dashboard">Media Dashboard</a>
          </li>
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
