DECContent = React.createClass({

  getConcepts() {
    // function to populate Concept selection options
    return ["People/Customers", "Things 1", "Places 1", "Places 2"]
  },

  renderConcepts() {
    return this.getConcepts().map((concept) => {
      return (
        <li>{concept}</li>
      )
    })
  },

  render() {
    return (
      <div id="dec-content-component">
        <h1 className="page-header">Truth: Define / Create / Link </h1>
        <form>
          <div>
            <label htmlFor="enter-truth-name"><h3>Enter Truth Name:</h3></label>
            <input type="text" name="enter-truth-name" id="enter-truth-name"></input>
          </div>
          <div>
            <dropdown name="select-concept">
              <input id="toggle2" type="checkbox" />
              <label htmlFor="toggle2"><h3>Select Concept to Truth<i className="fa fa-sort float-right"></i></h3></label>
              <ul className="animate">
                {this.renderConcepts()}
              </ul>
            </dropdown>
          </div>
        </form>
      </div>
    )
  }
})
