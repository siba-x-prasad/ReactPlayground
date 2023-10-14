import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateApp from './3state/StateApp'; 
import * as serviceWorker from './serviceWorker';
import ReactHookApp from './4reactHook/ReactHookApp';
import MethodReferenceApp from './5passingMethodReference/MethodReferenceApp';
import TwoWayBindingApp from './6twoWayBinding/TwoWayBindingApp'
import AssignmentApp from './7Assignment/AssignmentApp'
import AppListShowHide from './8renderListConditionally/App'
import ListPerson from './9listOfPersons/ListPerson'
import ListWithStateApp from './10ListWithState/ListWithStateApp';
import Assignment2 from './11Assignment/Assignment2';
import StyleApp from './12StylingComponentDynamically/StyleApp'
import RadiumApp from './13RadiumExample/RadiumApp';
import StyledComponentApp from './14styledComponent/StyledComponentApp';
import CssModuleApp from './15CSSModule/App';
import DebugApp from './16Debugging/DebugApp';
import StructuredApp from './17structureProject/containers/App';
import CreateComponentLifecycleApp from './18createComponentLifeCycle/containers/App';
import UpdateComponentLifecycleApp from './19updateComponentLifecycle/containers/App';
import StateChangeLifecycleApp from './20stateChnageLifecycle/containers/App';
import UseEffectExampleApp from './21useEffectExample/containers/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StateApp /> */}
    {/* <ReactHookApp/> */}
    {/* <MethodReferenceApp/> */}
    {/* <TwoWayBindingApp/> */}
    {/* <AssignmentApp/> */}
    {/* <AppListShowHide/> */}
    {/* <ListPerson/> */}
    {/* <ListWithStateApp/> */}
    {/* <Assignment2/> */}
    {/* <StyleApp/> */}
    {/* <RadiumApp/> */}
    {/* <StyledComponentApp/> */}
    {/* <CssModuleApp/> */}
    {/* <DebugApp/> */}
    {/* <StructuredApp/> */}
    {/* <CreateComponentLifecycleApp/> */}
    {/* <UpdateComponentLifecycleApp/> */}
    {/* <StateChangeLifecycleApp/> */}
    <UseEffectExampleApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
