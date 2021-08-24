import React from 'react'

export default function useStateObject () {

      const [user, setUser] = useState({ name: "", email: "", age: "" });

      // handle change event of the input
      const handleChange = (e) => {
        e.persist();
        setUser((prevUser) => ({
          ...prevUser,
          [e.target.name]: e.target.value,
        }));
      }

      return (
        
      <div className="App">
      <h3>useState with object in React Hooks</h3>
      <br>
      <label>Name:</label>
      <input
       type="text"
       name="name"
      value="{user.name}"
      onchange="{handleChange}" />
      <br><br>
      <label>Email:</label>
      <input 
      type="text"
       name="email" 
       value="{user.email}" 
       onchange="{handleChange}" />
      <br/><br/>
      <label>Age:</label>
      <input 
      type="text" 
      name="age" 
      value="{user.age}" 
      onchange="{handleChange}" />
      <br><br>
      <label>Output:</label>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      
     
</div>
           
      );
}
