import './App.css';
import Sidebar from "./components/Sidebar";
import Header from './components/Header';
import Dashboard from './components/Dashboard';

import  Facility  from './components/Facility';
import Comparison from './components/Comparison';
import Config from './components/Config';
import Master from './components/Master';
import Sync from './components/Sync';

import {Switch,Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
       <Header/>
     <Sidebar/>
     
      <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/Facility" component={Facility}/>
      <Route exact path="/Comparison" component={Comparison}/>
      <Route exact path="/Config" component={Config}/>
      <Route exact path="/Master" component={Master}/>
      <Route exact path="/Sync" component={Sync}/>
  
      </Switch>
  
    </div>
  );
}

export default App;