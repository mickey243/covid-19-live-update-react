
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CoronaLiveApi from './component/CoronaLiveApi';
import Welcome from './component/Welcome';
import Example from './component/Example';


function App() {
  return (
    <div className="App">
      <Welcome />
      <CoronaLiveApi />
    </div>
  );
}

export default App;
