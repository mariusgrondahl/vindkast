import React, {Component} from "react";
import axios from "axios";
import qs from "querystring";


class Auth {
    constructor(domain) {
        this.domain = domain || process.env.REACT_APP_API;
        this.login = this.login.bind(this);
    }

    login(username, password) {
        return axios({
            method: "POST",
            url: "login",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, password}),
        })
        .then((response)=> {
            this.setUser(response.data)
        })
    }

    signup({username, password, firstname, lastname, email}) {
        return axios({
            method: "POST",
            url: "signup",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, firstname, lastname, password, email}),
        })
        .then((response)=> {
            this.setUser(response.data);
        })
    }

    loggedIn(){
        const user = this.getUser()
        return !!user; 
    }

    setUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
    
    logout(){
       return axios({
            baseURL: this.domain,
            url: "logout"
        })
        .then((res)=> {
            localStorage.removeItem('user');
        })
    }    
}

export default Auth;