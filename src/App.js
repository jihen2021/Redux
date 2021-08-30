
import AddList from './Component/AddList';
import TodoList from './Component/TodoList';
import TotalCompleteItems from './Component/TotalCompleteItems';
import './App.css';
import Search from './Component/Search';
import Filtre from './Component/Filtre';


function App() {
  return (
    <div className='container p-4 mt-5'>
    <h1 className="sofia2">My Todos</h1>
 
    <AddList />
    <Filtre/>
   <hr/>
    <TodoList />
    <hr/>
    <TotalCompleteItems/>
    </div>
  );
}
export default App;
