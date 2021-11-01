import './App.css';
import babyNames from './baby_names.json';
import NameLabel from './components/name_label';

const sortedBabyNames = babyNames.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
console.log(sortedBabyNames);

function App() {
  return (
    <div className="App">
      <NameLabel />
      {/* {sortedBabyNames.map((baby, i) => {
        return <NameLabel baby={baby} key={i}/>
      })} */}
    </div>
  );
}

export default App;
