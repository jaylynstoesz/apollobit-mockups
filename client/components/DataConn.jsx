DataConn = React.createClass({

  getInitialState() {
    return {
      overview: true
    }
  },

  handleClick() {
      console.log("clicked!");
      this.state.overview ? this.setState({overview : false}) : this.setState({overview : true})
  },

  render() {
    return (
      <div>
        { this.state.overview ? <DataConnOverview handleClick={this.handleClick}/> : <DataConnDetail handleClick={this.handleClick}/> }
      </div>
    )
  }
})
