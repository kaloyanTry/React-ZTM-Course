import { useState, useEffect } from 'react';

import CardList from './components/card-list';
import SearchBox from './components/search-box';

const App = () => {
  const [serchField, setSearchField] = useState();
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(serchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, serchField]);

  const onSearchChange = (event) => {
    const setSearchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(setSearchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
