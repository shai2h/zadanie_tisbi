import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState("");  
    const [password,setPassword] = useState("");
    const[allEntry,setallEntry] =useState([]);   
    const submitForm =(e)=>{
        e.preventDefault();    
        const newEntry ={email:email,password:password };
        setallEntry([...allEntry,newEntry]);   
        console.log(allEntry);
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)} />
                    
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password"  value={password}  onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type="submit">Войти</button>
            </form>
            <div>
                {
                    allEntry.map((curElem)=>{
                        return(
                             <div className="showdata">
                                 <p>{curElem.email}</p>
                                 <p>{curElem.password}</p>

                             </div>
                        )

                    })
                }
            </div>
        </>
    )
};

export default Login;