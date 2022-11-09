import { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState('');
  const MySwal = withReactContent(Swal);

  const addTodo = (e) => {
    setTodos([...todos, todoName]);
    setTodoName('');
    MySwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your todo has been added !',
      showConfirmButton: false,
      heightAuto: false,

      timer: 1500,
    });
  };

  const deleteTodo = (e) => {
    const id = e.target.id;

    const newTodos = todos.filter((item, index) => {
      return index != id;
    });

    setTodos(newTodos);
    MySwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your todo has been deleted !',
      showConfirmButton: false,
      heightAuto: false,
      timer: 1500,
    });
  };

  return (
    <div className='container '>
      <h1 className='text-center'>Todo List !</h1>
      <ul className='list-group mt-3 text-center'>
        {todos.map((todo, index) => {
          return (
            <li key={index} className='list-group-item'>
              <h5>{todo}</h5>
              <button
                onClick={deleteTodo}
                type='button'
                id={index}
                className='btn btn-danger'
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <div className='input-group mt-5'>
        <input
          type='text'
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className='form-control'
          placeholder='Add your Todo'
        />
        <button
          onClick={addTodo}
          className='btn btn-secondary'
          type='button'
          id='button-addon2'
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default App;
