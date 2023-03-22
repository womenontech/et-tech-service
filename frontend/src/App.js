import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component{
  state = {
    clients: []
  };



  async componentDidMount() {
    const requestOptions = {
              method: 'POST',
              headers: {
              //'Access-Control-Allow-Origin': '*',
              //'Content-Type': 'application/json',
              //'charset':'utf-8'
              }
    };

    console.log('before I was triggered during componentDidMount')
    fetch('/welcome/clients', {method: 'POST'})
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              clients: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
              clients:[""+error]
            });
          }
        )
  }

  render() {
    console.log('I was triggered during render')
    const {clients} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>--CLIENTS--</h2>
              {clients.map(client => <li>{client}</li>)}
            </div>
          </header>
        </div>
    );
  }
}
export default App;