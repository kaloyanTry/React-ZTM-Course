import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Yihua',
      company: 'ZTM',
    };
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi {this.state.name}, I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({ name: 'Kaloyan' });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
