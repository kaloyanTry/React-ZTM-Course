import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { names: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    const filteredNames = this.state.names.filter((name) => {
      return name.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <input
          className='searchBox'
          type='search'
          placeholder='search name'
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredNames.map((name) => {
          return (
            <div key={name.id}>
              <h1>{name.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
