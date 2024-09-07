import { useState } from "react";

export default function Contact() {
    const [formInputs,setFormInput] = useState({
      name:"",
      email:"",
      age:"",
    });
   

    const changeData = (e)=>{
      const {name,value} = e.target;
     setFormInput({...formInputs,[name]:value});
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(formInputs);
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>User Name </label>
        <input type="text" value={formInputs.name} name='name' onChange={changeData} />
  
        <label>Email </label>
        <input type="text" value={formInputs.email} name='email' onChange={changeData} />
        <label>Age </label>
        <input type="text" value={formInputs.age} name='age' onChange={changeData} />
  
        <hr />
        <button type='submit'>Submit</button>

      </form>
    )
  }