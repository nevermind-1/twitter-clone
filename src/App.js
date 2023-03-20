
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    //BEM CONVENTION
    <div className="app">
      <Sidebar />

      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
