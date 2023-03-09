import React, { useState } from "react";

const App=()=>{
    const [fullName,setFullName]=useState({
       fname:"",
       lname:"",
       email :"",
       phone:"",

    })
    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);

        const{name,value}=event.target;

        setFullName((preValue)=>{
            console.log(preValue);

            return {
                ...preValue,
                [name]:value,
            }

        });
     }
     const onSubmits=(event)=>{
        event.preventDefault();
        alert("form submitted");
     }
     return(
        <>
            <div className="div">
                <form onSubmit={onSubmits}>
                    <div className="button">
                        <h1>
                            Hello {fullName.fname}{fullName.lname}
                        </h1>
                        <br/>
                        <p>{fullName.email}</p>
                        <br/>
                        <p>{fullName.phone}</p>
                        <input  className="divi"
                        type="text" 
                        placeholder="enter your name"
                        name ="fname"
                        onChange={inputEvent}
                        value={fullName.fname}

                        />
                        <br/>
                        <input className="divi"
                        type="text" 
                        placeholder="enter your last name"
                        name ="lname"
                        onChange={inputEvent}
                        value={fullName.lname}

                        />
                        <br/>
                        <input className="divi"
                        type="email" 
                        placeholder="enter your email"
                        name ="email"
                        onChange={inputEvent}
                        value={fullName.email}
                        autoComplete="off"

                        />
                        <br/>
                        <input className="divi" 
                        type="number" 
                        placeholder="enter your number"
                        name ="phone"
                        onChange={inputEvent}
                        value={fullName.phone}
                       

                        />
                        <br/>
                        <button className="buttonn"  type="submit">submit</button>

                        
                    </div>

                </form>
            </div>
        </>
     )




}
export default App;