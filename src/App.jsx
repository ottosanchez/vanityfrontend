// import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }

  }
  componentDidMount() {
    fetch(`https://80rqyyzdca.execute-api.us-east-1.amazonaws.com/prod/recentvanitynumbers/`, {
      "Content-Type": "application/json"
    })
      .then(response => response.json())
      .then((data) => {
        
        return this.setState({
          data: data
        })
      })

  }
  render () {
    let rows = this.state.data.map((item) => {
      return (
        <tr>
          <td>{item.phoneNumber}</td>
          <td>{item.vanityWords.join('| ')}</td>
          <td>{item.timestamp}</td>
        </tr>
      )
    });
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Vanity Numbers App</h1>
          <table>
            <thead>
                <tr>
                    <th colspan="3">Vanity Numbers Last 5 Callers</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
          </table>
        </header>
      </div>
    );

  }
}

export default App;
