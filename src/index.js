
//Import react and reactdom

import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText(){
    return 'Click on ME!!!'
}

//create a component either class or function....Her we are creating function
const App=()=>{
    const buttonText='click me!!';
     return( 
     <div>
         {/* className should be used insted of class bcz we use class for defining class component */}
     <label className="label" for="name">Enter name</label>
     <input id="name" type="text"/>
     {/* in html we do style="background-color:red;color:white;"
        {telling it's a html element and { js object}}  */}
     <button style={{backgroundColor:'red',color:'white'}}>{buttonText}</button> 
     <button style={{backgroundColor:'red',color:'white'}}>{getButtonText()}</button> 
     {/* can refer javascript variables insted jsx like insted of giving submit directly u can define variable and refer using {} braces..
     used on button u can use this for various things like creating functions u can do {getButtonText()}  in similiar fashion */}
   </div>
   );
};
//rendering a component
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
); 