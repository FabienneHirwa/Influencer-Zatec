import './App.css';
import Nav from './components/nav';
import UserApi from './components/userApi';
import Body from './components/body';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <Nav />
     <UserApi />
     
    </div>
  );
}

export default App;
