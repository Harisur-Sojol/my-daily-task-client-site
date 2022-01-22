import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import AddingTask from './Pages/Home/AddingTask/AddingTask';
import Hudai from './Pages/Home/Hudai/Hudai';
import Header from "./Pages/Home/Header/Header";
import Tasks from "./Pages/Home/Tasks/Tasks";
import UpdateTask from "./Pages/Home/UpdateTask/UpdateTask";


function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route exact path='/home'>
           <Home></Home>
         </Route>
         <Route exact path="/addingTask">
           <AddingTask></AddingTask>
         </Route>
         <Route exact path="/myTaskList">
           <Tasks></Tasks>
         </Route>
         <Route exact path="/updateTask/:id">
           <UpdateTask></UpdateTask>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
