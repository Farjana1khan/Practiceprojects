import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import './index.css';
//import AppState from './AppState';

//import App from './App';
//import FunctionalCompo from './FunctionalCompo';
//import ClassComponent from './ClassComponent';
//import Student from './Student';
//import NewComponent from './PracticeProject/NewComponent';

//import Booklist from './Booklist';
//import Message from './PracticeProject/Message'
//import Counter from './PracticeProject/Counter';

 //import Props1 from './PracticeProject/Props1';
 //import Contact from './PracticeProject/Contact';
//import RegisterForm from "./PracticeProject/RegisterForm";
//import Loginform from "./PracticeProject/Loginform";

// import ClassComponentUses from "./ClassComponentUses";
//import LoginDemo from "./PracticeLoginform/LoginDemo";
//import showtab from "./showtab";
//import LoginForm from "./LoginFormDemo/LoginForm";
//import LoginwithValid from "./LoginFormWithValidation/LoginwithValid";
//import Ratingcomponent from "./PracticeProject/Ratingcomponent";
//import TimePicker from "./PracticeProject/TimePicker";
//import BarChart from "./PracticeProject/BarChart";

//import ImageUpload from "./PracticeProject/ImageUpload";
//import DidMount from "./PracticeProject/DidMount";
//import DidMountDidUpdate from "./PracticeProject/DidMountDidUpdate";
//import HooksExample from "./PracticeProject/HookExample";
//import Chart from "./PracticeProject/Chart";
//import Ccard from "./PracticeProject/Ccard";
//import AutoScroll from "./PracticeProject/AutoScroll";
//import wizard from "./PracticeProject/wizard";
//import  Appstate from './PracticeProject/AppState'
//import  AudioPlayer from './PracticeProject/AudioPlayer'
//import useStateObject from "./PracticeProject/useStateObject";
//import CSVFile from "./PracticeProject/CSVFile";
// import dynamicradiobutton from "./PracticeProject/dynamicradiobutton";

// import ClassCounter from "./HooksExampleAndClass/ClassCounter";
// import HookCounter from "./HooksExampleAndClass/HookCounter";
 //import Update from "./PracticeProject/Update";

//import Script from "./importexportfile/Script";
//import Main from "./RoutingPage/Main";
//import TabButton from "./Tabhideparagraph/TabButton";
//import Main from "./ImageZoom/Main";
//import Main from "./apicalllist/Main";
//import Main from "./Parent-Child/Main";
//import Main from "./DemoReactFile/Main";
//import Strongpass from "./StrongPassword//Strongpass";
//import Main from "./LandingPage/Main";
//import NumberIncrement from "./WorkingState/NumberIncrement";
//import GetValue from "./SelectMultivalue/GetValue"
import Main from "./useState/useStateAnduseEffect";
import * as serviceWorker from "./PracticeProject/serviceWorker";
function App() {
  return (
    <div className="App">
      {/* <h3>useState with the previous state - </h3>
      <ClassCounter />
      <br />
      <br />
      <HookCounter /> */}
    </div>
  );
}

export default App;
ReactDOM.render(
  <React.StrictMode>
    <Main />
    {/* <GetValue /> */}

    {/* <NumberIncrement /> */}
    {/* <Strongpass /> */}
    {/* <TabButton /> */}

    {/* <Script /> */}
    {/* <dynamicradiobutton /> */}
    {/* <Update /> */}
    {/* <CSVFile /> */}
    {/* <useStateObject /> */}
    {/* <Appstate/> */}
    {/* <AudioPlayer /> */}
    {/* <wizard /> */}
    {/* <AutoScroll /> */}
    {/* <Ccard /> */}
    {/* <HookExample /> */}
    {/* <DidMountDidUpdate /> */}
    {/* <DidMount /> */}
    {/* <ImageUpload /> */}
    {/* <Chart /> */}
    {/* <BarChart /> */}
    {/* <TimePicker /> */}
    {/* <Ratingcomponent /> */}
    {/* <LoginForm /> */}
    {/* <RegisterForm /> */}
    {/* <showtab /> */}
    {/* <LoginDemo /> */}
    {/* <LoginwithValid /> */}
    {/* <ClassComponentUses /> */}
    {/* <Loginform /> */}
    {/* <RegisterForm /> */}
    {/* <Contact/> */}
    {/* <Props1 /> */}
    {/* <Counter /> */}
    {/* <Message /> */}
    {/* <NewComponent /> */}
    {/* <FunctionalCompo />
   
    <ClassComponent />
    <Student /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
