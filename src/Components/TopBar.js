import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Auth from "../utils/Auth";
import "../Css/TopBar.css";
import { FaUser} from 'react-icons/fa';


const auth = new Auth();

class TopBar extends Component {
    constructor(props){
        super(props);
    
        this.state = { 
          loggedIn: null,
          username: ""
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


        return(
            <div className="TopBar">
                <div className="logo">
                <Link to="/" ><img src="../img/windspot.svg" width="130" /></Link>
                    
                </div>
                    {
                    this.state.loggedIn?
                    <ul>
                      
                    <li>
                    <Link to={`/user/${this.state.loggedIn.id}`}> 
                    Hi, {this.state.loggedIn.firstname}</Link>
                    </li> 
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

