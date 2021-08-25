
import AddList from './Component/AddList';
import TodoList from './Component/TodoList';
import TotalCompleteItems from './Component/TotalCompleteItems';
import './App.css';
import Search from './Component/Search';


function App() {
  return (
    <div className='container p-4 mt-5'>
    <h1 className="sofia2">My Todos</h1>
    <AddList />
    <Search/>
    <TodoList />
    <TotalCompleteItems/>
    </div>
  );
}
export default App;
