DataConnOverview = React.createClass({
  getTruths() {
    // Truths API call
    return [
      {"id": 1,
        "name": "Customers",
        "type": "People",
        "totalFieldCount": 150,
        "totalKeys": 2,
        "totalTruthFields": 3,
        "totalInclusionaryFields": 145,
        "lastBuildDate": "2015-01-01",
        "status": "ready",
        "repositories": [
          {"id": 1,
            "name": "Customer DB"
          }
        ],
        "selectedKeyGroups": [
          {"id": 1, "name":
            "Customer ID"
          }
        ],
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
        "name": "Transactions",
        "type": "Thing",
        "totalFieldCount": 3,
        "totalKeys": 1,
        "totalTruthFields": 1,
        "totalInclusionaryFields": 1,
        "lastBuildDate": "2015-01-01",
        "status": "error",
        "repositories": [
          {"id": 2,
            "name": "Transaction File"
          }
        ],
        "selectedKeyGroups": [
          {"id": 1,
            "name": "Customer ID"
          }
        ],
        "availableKeyGroups": [
          {"id": 1,
            "name": "Customer ID"
          }
        ]
      },
      {"id": 3,
        "name": "Locations",
        "type": "Place",
        "totalFieldCount": 3,
        "totalKeys": 1,
        "totalTruthFields": 1,
        "totalInclusionaryFields": 1,
        "lastBuildDate": "2015-01-01",
        "status": "analyzing",
        "repositories": [
          {"id": 2,
            "name": "Transaction File"
          }
        ],
        "selectedKeyGroups": [
          {"id": 1,
            "name": "Customer ID"
          }
        ],
        "availableKeyGroups": [
          {"id": 1,
            "name": "Customer ID"
          }
        ]
      }
    ]
  },

  renderTruths() {
    var statusColors = {"ready" : "green", "analyzing" : "orange", "error" : "red"}
     return this.getTruths().map((truth) => {
       var style = {
         color: statusColors[truth.status]
       }
       return <tr key={truth.id} onClick={this.props.handleClick}>
                <td>{truth.name}</td>
                <td>{truth.type}</td>
                <td>{truth.totalFieldCount}</td>
                <td>{truth.totalKeys}</td>
                <td>{truth.totalTruthFields}</td>
                <td>{truth.totalInclusionaryFields}</td>
                <td>{truth.lastBuildDate}</td>
                <td><div className="truth-status" style={style}>{truth.status.toUpperCase()}</div></td>
              </tr>
            })
   },

  render() {
    return (
      <div id="dataconn-overview-component">
        <h1 className="page-header">Truth: Define / Create / Link </h1>
        <div id="truth-overview-table">
        <h3>Truth Views</h3>
          <table>
            <tr>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Number of Fields</th>
                  <th>Number of Keys</th>
                  <th>Number of Truth Fields</th>
                  <th>Number of Inlcusionary Fields</th>
                  <th>Last Refresh</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTruths()}
              </tbody>
            </tr>
          </table>
        </div>
      </div>
    )
  }
})
