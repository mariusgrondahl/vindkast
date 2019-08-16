import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Css/Navbar.css";
import { withRouter } from "react-router";
import Auth from "../utils/Auth";
const auth = new Auth();

class Navbar extends Component {
    constructor(props){
        super(props);
    
        this.state = { 
          user: null
        }
      }

      handleLogout = (e)=> {
        e.preventDefault();
        var fixProps = this.props;
        auth.logout()
          .then(()=> {
            this.setState({user: null}, ()=> {
              fixProps.history.push("/");
            })
              
          })
          .catch((error)=> {
            this.setState({error: error.message})
          })
      }
    
      componentDidMount() {
        this.setState({
          user: auth.getUser()
        })
      }
    
    render(){
        return (
           
            <div className="Navbar">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/map" >Map</Link></li>
                    {
                    this.state.user?
                    <>
                    <li><Link to="/logout" >Logout</Link></li> 
                    </>
                    :
                    <>
                    <li><Link to="/login" >Login</Link></li> 
                    <li><Link to="/signup" >Signup</Link></li>
                    </>
                    }
                   
                </ul>
            </div>
        )
    }
}

export default withRouter(Navbar);
