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
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Hello from V2</h1>
        </header>
      </div>
    );

  }
}

export default App;
