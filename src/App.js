import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRendering from './components/pure/optionalRendering';
import LoginFormik from './components/forms/loginFormik';
import RegisterFormik from './components/forms/registerFormik';
import AddTaskForm from './components/forms/addTaskForm';

function App() {
  return (
    <div className="App">
          {/* <Greeting name="Lautaro"/> */}
          {/* <GreetingF name="Lautaro"/> */}
          {/* <TaskListComponent /> */}
          {/* <LoginFormik></LoginFormik> */}
          {/* <RegisterFormik></RegisterFormik> */}
          <AddTaskForm></AddTaskForm>
          {/* <OptionalRendering></OptionalRendering> */}
          {/* <ContactListComponent /> */}
          {/* <GreetingStyled name="Lautaro"/> */}
          {/* <Father></Father> */}
    </div>
  );
}

export default App;
