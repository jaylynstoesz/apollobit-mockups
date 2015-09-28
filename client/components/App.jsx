App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },

  renderPage() {
    const currentUser = this.data.currentUser
    return (
      <div>
        <Navbar
          key={currentUser._id}
          currentUser={currentUser}
          activeTab={this.props.currentPage} />
          {this.props.currentPage === "data-enlightenment" ? <DataEnlightenment /> : null}
          {this.props.currentPage === "media-dashboard" ? <MediaDashboard /> : null}
          {this.props.currentPage === "admin" ? <Admin /> : null}
      </div>
    )
  },

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
})
