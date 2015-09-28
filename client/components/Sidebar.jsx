Sidebar = React.createClass({
  makeActive(e) {
    var allTabs = document.getElementsByClassName("sidebar-tab")
    for (var i = 0; i < allTabs.length; i++) {
      var tab = allTabs[i]
      tab.setAttribute("class", "sidebar-tab")
    }
    e.target.setAttribute("class", "sidebar-tab active")
  },

  render() {
    return (
      <div id="sidebar-component">
        <table>
          <tr className="sidebar-tab" onClick={this.makeActive}>
            <td><span className="fa fa-key"></span></td>
            <td><a href="#">Dashboard</a></td>
          </tr>
          <tr className="sidebar-tab" onClick={this.makeActive}>
            <td><span className="fa fa-cloud"></span></td>
            <td><a href="#">Appllobit Cloud</a></td>
          </tr>
          <tr className="sidebar-tab active" onClick={this.makeActive}>
            <td><span className="fa fa-cloud"></span></td>
            <td><a href="#">Data Connectivity</a></td>
          </tr>
          <tr className="sidebar-tab" onClick={this.makeActive}>
            <td><span className="fa fa-shopping-cart"></span></td>
            <td><a href="#">Marketplace</a></td>
          </tr>
          <tr className="sidebar-tab" onClick={this.makeActive}>
            <td><span className="fa fa-bolt"></span></td>
            <td><a href="#">Data Science</a></td>
          </tr>
          <tr className="sidebar-tab" onClick={this.makeActive}>
            <td><span className="fa fa-plus"></span></td>
            <td><a href="#">Selection Tool</a></td>
          </tr>
          <tr className="sidebar-tab" onClick={this.makeActive}>
            <td><span className="fa fa-bar-chart"></span></td>
            <td><a href="#">Reporting</a></td>
          </tr>
          <tr className="sidebar-tab" onClick={this.makeActive}>
            <td><span className="fa fa-calendar"></span></td>
            <td><a href="#">Master Schedule</a></td>
          </tr>
          <tr className="sidebar-tab" onClick={this.makeActive}>
            <td><span className="fa fa-location-arrow"></span></td>
            <td><a href="#">Outbound Integration</a></td>
          </tr>
        </table>
      </div>
    )
  }
})
