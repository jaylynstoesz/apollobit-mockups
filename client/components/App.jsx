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
        currentUser={currentUser} />
        <Sidebar />
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
