import TodosForm from '../components/TodosForm/TodosForm.jsx';
import TodosList from '../components/TodosList/TodosList.jsx';


const App = () => {
    return (
        <div className='todos'>
            <TodosForm />
            <TodosList />
        </div>
    );
}

export default App;
