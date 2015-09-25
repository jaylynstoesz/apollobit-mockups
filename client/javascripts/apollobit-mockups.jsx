if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  })

  // Meteor.startup( function () {
  //   React.render(<App />, document.getElementById('render-target'))
  // })
}

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }

FlowRouter.route('/', {
  triggersEnter: function(context, redirect) {
    redirect('/data-enlightenment');
  }
})

FlowRouter.route('/data-enlightenment', {
  action: function() {
    React.render(<App currentPage="data-enlightenment" />, document.getElementById('render-target'))
  }
})

FlowRouter.route('/media-dashboard', {
  action: function() {
    React.render(<App currentPage="media-dashboard" />, document.getElementById('render-target'))
  }
})

FlowRouter.route('/admin', {
  action: function() {
    React.render(<App currentPage="admin" />, document.getElementById('render-target'))
  }
})

FlowRouter.route('/:other', {
  triggersEnter: function(context, redirect) {
    redirect('/data-enlightenment');
  }
})
