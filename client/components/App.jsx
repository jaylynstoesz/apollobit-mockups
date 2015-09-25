App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },

  renderPage() {
    const currentUser = this.data.currentUser
    return <Navbar
      key={currentUser._id}
      currentUser={currentUser} />;
  },

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
})
