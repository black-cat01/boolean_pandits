import React,{Component} from 'react';
import Login from '../Login';
import Cookie from 'js-cookie'
import { Redirect } from 'react-router-dom'

class Auth extends Component{

    constructor(){
        super()
        this.state={
            isRegister:false
        }

    }
    login(event) {

        event.preventDefault();
        console.warn("state", this.state)
        console.log('test',localStorage.getItem("auth"));
        fetch('http://localhost:1337/Enrolls').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                let data = resp.filter(d=> (d.idnumber == this.state.idnumber))[0]

                localStorage.setItem("role",JSON.stringify(data.role))
                Cookie.set('auth',JSON.stringify(data))
                console.log(data);
                if(data != null){
                    this.setState({isCorrect: true})   
                }
                else{
                    console.log("wrong credentials");
                }
                
            })
        })
    }
    register() {

        console.warn("state", this.state)
        fetch('http://localhost:1337/Enrolls',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                localStorage.setItem("auth",JSON.stringify(resp))
            })
        })
 
    }
    

    render(){

        // useEffect(() => {
        //     let isAuth = localStorage.getItem('auth')
        //     if(isAuth & isAuth !== 'undefined') {
        //        props.history.push('/home')
        //     }
        //  }, [])
        var auth = JSON.parse(localStorage.getItem('auth'))
        console.warn('auth',auth);
        return(
            <div className="wrapper">
                {/* {auth ? <Redirect to="home"/>: null} */}
                {this.state.isCorrect ? <Redirect to="home"/>: null}
                {
                    
                    !this.state.isRegister?
                    <div className="form-group ">
                        <input type="text" placeholder="enrol ID" onChange={(e)=>{this.setState({idnumber:e.target.value})}} /> <br /><br />
                        <input type="text" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})}} /> <br /><br />
                        <button onClick={this.login.bind(this)}>Login</button>
                        <button onClick={()=> this.setState({isRegister: true})}>Go to Register</button>
                    </div>
                    :
                    <div className="form-group ">
                        <input type="text" placeholder="Enter Your Name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} /> <br /><br />

                        <input type="text" placeholder="Enter Your idnumber" value={this.state.idnumber} onChange={(e)=>{this.setState({idnumber:e.target.value})}} /> <br /><br />

                        <input type="text" placeholder="Enter Your E-mail " value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} /> <br /><br />
                        
                        <input type="text" placeholder="Set Password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} /> <br /><br />

                        <div class="form-group">
                        <select 
                        name="role"
                        value={this.state.role}
                        onChange={(e)=>{this.setState({role:e.target.value})}} >

                            <option value="student" >Student</option>
                            <option value="faculty" >Faculty</option>

                        </select>
                        </div>

                        <button onClick={this.register.bind(this)}>register</button>
                        <button onClick={()=> this.setState({isRegister: false})}>Go to Login</button>

                        
                    </div>
                }

                
            </div>
        );
    }
}

export default Auth;