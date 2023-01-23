import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/forms/ex';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
          {/* <Greeting name="Lautaro"/> */}
          {/* <GreetingF name="Lautaro"/> */}
          <TaskListComponent />
          {/* <ContactListComponent /> */}
          {/* <GreetingStyled name="Lautaro"/> */}
          {/* <Father></Father> */}
    </div>
  );
}

export default App;
