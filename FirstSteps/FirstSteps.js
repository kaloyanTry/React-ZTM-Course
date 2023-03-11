import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // name: 'Yihua',
      name: { firstName: 'Kaloyan', lastName: 'Ganchev' },
      company: 'ZTM',
    };
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{' '}
            {this.state.company}.
          </p>
          <button
            onClick={() => {
              // this.setState({
              //   name: { firstName: 'Yihua', lastName: 'Zhang' },
              // }); // calling a callback function is a better way -> down:
              this.setState(() => {
                return {
                  name: { firstName: 'Yihua', lastName: 'Zhang' },
                };
              });
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
