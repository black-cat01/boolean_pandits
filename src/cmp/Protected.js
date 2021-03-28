import React , {Component} from 'react';
import { Redirect } from 'react-router-dom'
import Cookie from 'js-cookie'
function Protected(props){
    const Cmp= props.cmp
    var auth = JSON.parse(Cookie.get('auth'))
    let role = auth['role']
    console.warn(role)
    console.log('role',role);
    
    return(
        <div>{auth ? <Cmp /> : <Redirect to="login"></Redirect>}</div>

    )
}

export default Protected;