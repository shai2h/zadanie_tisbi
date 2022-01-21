import React, { useState } from 'react'


const Registration = () => {

    const [userRegistration, setuserRegistration] = useState({
        username:"",
        email:"",
        password:""

    });
    const [records, setRecord] = useState([]);
    const handleInput=(e)=> {
        const name =e.target.name;
        console.log(name);
        const value=e.target.value;
        console.log(name,value);

        setuserRegistration({... userRegistration, [name]: value })

    }
const handleSubmit =(e)=>{
    e.preventDefault();
    const newRecord ={...userRegistration, id: new Date().getTime().toString()}
    setRecord([...records,newRecord]);

    setuserRegistration({username:"", email:"", phone:"",password:""});
}


    return (
        <>

            <form action="" onSubmit= {handleSubmit} >
                <div>
                    <label htmlFor="username">Логин</label>
                    <input type="text" autoComplete="off" value= {userRegistration.username}
                    onChange={handleInput}  name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" autoComplete="off" value= {userRegistration.email}
                    onChange={handleInput}  name="email" id="email" />
                </div>

                
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" autoComplete="off" value= {userRegistration.password}
                    onChange={handleInput} name="password" id="password" />
                </div>
                <button type="submit">Регистрация</button>
            </form>
<div>
     {
         records.map((curElem)=>{
             return(
             <div key={curElem.id}>
                    <p>{curElem.username}</p>
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

export default Registration;