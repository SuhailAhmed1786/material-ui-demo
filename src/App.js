import './App.css';
import { Button, AppBar, Tabs, Tab} from '@material-ui/core';
import React from 'react'
import Demo from './demo'
import ReactDOM from 'react-dom';
class App extends React.Component {


  render() {
    return (
      <AppBar title="My App">
        <Tabs>
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Services" />
          <Tab label="Contact" />
        </Tabs>
        
      </AppBar>
    
      
    )
    
  }

  //   render() {
  //   return (
  //         <div className="App">
  //     <header className="App-header">
      
  //       <p>
  //        HELLO React
  //       </p>


  //       <Button color="primary">Hello World</Button>
  //     </header>
  //   </div>

   
  //   )
  // }
}
// ReactDOM.render(<Demo/>, document.getElementById('app'));  

export default App;

