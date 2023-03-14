import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
