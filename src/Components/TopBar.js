import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Auth from "../utils/Auth";
import "../Css/TopBar.css";

const auth = new Auth();

class TopBar extends Component {
    constructor(props){
        super(props);
    
        this.state = { 
          loggedIn: null
        }
      }

      handleLogout = (e)=> {
        e.preventDefault();
        var fixProps = this.props;
        auth.logout()
          .then(()=> {
            this.setState({loggedIn: null}, ()=> {
              fixProps.history.push("/");
            })
              
          })
          .catch((error)=> {
            this.setState({error: error.message})
          })
      }
    
      componentDidMount() {
        this.setState({
          loggedIn: auth.getUser()
        })

      }
    render(){
       //  var username = JSON.parse(localStorage.getItem('user'));
       // let name = username.firstname + " " + username.lastname;

        return(
            <div className="TopBar">
                <div className="logo">
                <Link to="/" ><img src="../img/vindkastlogo.svg" width="110" /></Link>
                    
                </div>
                    {
                    this.state.user?
                    <ul>
                    <li><Link to="/logout" >Logout </Link></li> 
                    </ul>
                    :
                    <ul>
                    <li><Link to="/login" >Login</Link></li> 
                    </ul>
                    }
            </div>
        )
    }
}

export default withRouter(TopBar);