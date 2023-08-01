import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import logIn from './components/login.tsx';
import axios from 'axios';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function App() {
  // const [count, setCount] = useState(0)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async() => {
    console.log("working")
    if (!name){
      alert('name is required')
    }
    if (!password){
      alert('password is required')
    }
    // else{
    //   const regex = '[A-Z]+[a-z]'
    // }
    if (!email){
      alert('email is required')
    }
    const data = {
      name: name,
      email: email,
      password: password
    }
    await axios.post('http://localhost:5000/register', data).then((res)=> {
      console.log(res, 's')
      alert(res.data)
    })
    
  } 

  return (
    <>
    <div>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control onChange={(e)=> {setName(e.target.value)}} type="text" placeholder="John Doe" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={(e)=> setPassword(e.target.value)} type="Password"  />
    </Form.Group>
  </Form>
  <Button onClick={handleRegister} variant="primary" >Register</Button>
    </div>
    </>
  )
}

export default App
