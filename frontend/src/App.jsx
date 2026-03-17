import axios from 'axios';
import './App.css' 
import RecipeList from './components/RecipeList';

url = process.env.REACT_APP_API_URL

const apiCall = () => {
  axios.get(url).then((data) => {
    console.log(data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={apiCall}>Make API Call</button>

        <RecipeList />



      </header>
    </div>
  );
}


export default App;
