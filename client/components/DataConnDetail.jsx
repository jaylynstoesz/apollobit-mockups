DataConnDetail = React.createClass({

  getRepos() {
    // API call to get repository data
    return [
      {"id": 1,
        "name": "Customer DB",
        "totalFieldCount": 150,
        "totalKeys": 2,
        "totalIdentityFields": 3,
        "totalInclusionaryFields": 145,
        "availableKeyGroups": [
          {"id": 1,
            "name": "Customer ID"
          },
          {"id": 2,
            "name": "Account ID"
          }
        ]
      },
      {"id": 2,
        "name": "Transaction File",
        "totalFieldCount": 3,
        "totalKeys": 1,
        "totalIdentityFields": 1,
        "totalInclusionaryFields": 1,
        "availableKeyGroups": [
          {"id": 1,
            "name": "Customer ID"
          }
        ]
      }
    ]
  },

  renderRepos() {
    return this.getRepos().map((repo) => {
      return <tr key={repo.id} onClick={this.props.handleClick}>
               <td className="icons"><span className="fa fa-folder"></span></td>
               <td>{repo.name}</td>
               <td>{repo.totalFieldCount}</td>
               <td>{repo.totalKeys}</td>
               <td>{repo.totalIdentityFields}</td>
               <td>{repo.totalInclusionaryFields}</td>
               <td className="icons"><span className="fa fa-gear"></span><span className="fa fa-remove"></span></td>
             </tr>
           })
  },

  render() {
    return (
      <div id="dataconn-detail-component">
        <h1 className="page-header">Truth Details</h1>
        <form className="container">
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
        <div className="container" id="truth-overview-table">
        <h3>Truth Views</h3>
          <table>
            <tr>
              <thead>
                <tr>
                  <th className="icons"></th>
                  <th>Description</th>
                  <th>Number of Fields</th>
                  <th>Number of Keys</th>
                  <th>Number of Identity Fields</th>
                  <th>Number of Inlcusionary Fields</th>
                  <th className="icons"></th>
                </tr>
              </thead>
              <tbody>
                {this.renderRepos()}
              </tbody>
            </tr>
          </table>
        </div>
      </div>
    )
  }
})
