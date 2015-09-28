DataConnDetail = React.createClass({

  render() {
    return (
      <div id="dec-detail-component">
        <h1 className="page-header">Truths</h1>
        <form>
          <div>
            <label htmlFor="enter-truth-name"><h3>Truth Name</h3></label>
            <input type="text" name="enter-truth-name" id="enter-truth-name" placeholder="New Truth"></input>
          </div>
          <div>
            <dropdown name="select-concept">
              <input id="toggle2" type="checkbox" />
              <label htmlFor="toggle2"><h3>Truth Type<i className="fa fa-sort float-right"></i></h3></label>
              <ul className="animate">
                <li>People</li>
                <li>Places</li>
                <li>Things</li>
              </ul>
            </dropdown>
          </div>
        </form>
      </div>
    )
  }
})
