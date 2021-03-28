import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Cookie from 'js-cookie'

class Nav extends Component{



    removeExistingItem(key) {
        if (Cookie.get(key) === null)
            return false;
        Cookie.remove(key);
        return true;
    }
    
    logout(event){
        event.preventDefault();
        console.warn("state", Cookie.get("auth"))
        
        
        this.removeExistingItem("auth")
     
    }
    render(){
        return(
            // <div className="navbar navbar-dark bg-dark">
            //     <Link to="home">Home</Link>
            //     <Link to="about">About</Link>
            //     <Link to="/">Login</Link>
            // </div>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/home">CMS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active" style={{marginRight:'10px'},{marginLeft:'5px'}}>
                        <Link to="home">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item" style={{marginRight:'10px'},{marginLeft:'11px'}}>
                        <Link to="courses">Courses</Link>
                        </li>
                    </ul>
                    
                    {/* if (!{isauth}) {
                       <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                        <Link to="/" >Login</Link>
                        </li>
                       </ul> 
                    } else{
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                        <Link to="#">Logout</Link>
                        </li>
                       </ul>
                    }
                     */}
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                        <Link to="/">Login</Link>
                        </li>
                        <li class="nav-item">
                        {/* <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.logout.bind(this)} type="submit">Logout</button> */}
                        </li>
                    </ul>
                </div>
          </div>
        );
    }
}

export default Nav;