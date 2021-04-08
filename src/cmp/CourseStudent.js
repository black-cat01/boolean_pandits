import React, { useEffect, useState } from 'react'
import Cookie from 'js-cookie'

function CourseStudent () {


    const [ courses, setList ] = useState([])
    const [ auth, setAuth ] = useState({})
    const [ role, setRole ] = useState("")


    const authCheck = () => {

        if(Cookie.getJSON('auth')){

            setAuth(JSON.parse(Cookie.get('auth')))
            let role = JSON.parse(Cookie.get('auth'))['role']
            setRole(role)
            console.log('role',role);
        }
        else{
            setAuth(null)
        }
    }


    const fetchCourse = () => {

        
        let facId = JSON.parse(Cookie.get('auth'))['id']
        let facName = JSON.parse(Cookie.get('auth'))['name']
        console.log(facId)
        
        fetch('http://localhost:1337/students')
        .then(response=>response.json()).then((response) => {
            console.log(response);
            let temp = response.find((d) => (d.name.id == facId))
            console.log(temp.courses);
            setList(temp.courses)
        })
        .catch(error=>{
                console.log("sorry something went wrong",error);
            })

    }

    useEffect( () => {

        authCheck();
        console.log("idnumber",auth);
        fetchCourse();
    }, [] )

    return (
        <div>
            {
                courses.map(d=>{
                    return(
                        <div class="card">
                          <div class="card-body">
                            <blockquote class="blockquote">
                              <p>{d.coursename}</p>
                              <footer class="card-blockquote">Course Id :<cite title="Source title"> <strong>{d.courseid}</strong></cite></footer>
                            </blockquote>
                          </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CourseStudent