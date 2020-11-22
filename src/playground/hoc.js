import React from 'react';
import ReactDOM from 'react-dom';
    const Info = (props) => (
        <div>
        <p>This component one username: {props.username}</p>
        
        </div>
    )
    const Info2 = (props) => (
        <div>
        <p>This is component two password: {props.password}</p>
        </div>
    )
    const withAdminWarning = (WrappedComponent) => {
        return (props) =>(
            <div>
            {props.isAdmin? (<Info {...props}/>, <Info2 {...props}/>
          ): (<p> please donot share it is private!!</p>) }
              
        
            </div>
        )
     
    }
    const AdminInfo = withAdminWarning()
ReactDOM.render(<AdminInfo isAdmin= {true}username="Andualem" password="Mekonen"/>, document.getElementById('app'))
