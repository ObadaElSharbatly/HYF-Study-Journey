import './App.css';
import babyNames from './baby_names.json';
import NameLabel from './components/name_label';

const sortedBabyNames = babyNames.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

function App() {
  console.log(sortedBabyNames);
  return (
    <div className="App">
      <div className="names-con">
        {
          sortedBabyNames.map((baby, i) => {
            return <NameLabel baby={baby} key={i}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
