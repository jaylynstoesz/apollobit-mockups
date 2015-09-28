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

FlowRouter.route('/data-enlightenment/:other', {
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
