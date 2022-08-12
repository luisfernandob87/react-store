import axios from 'axios';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    const submit = data =>{
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
        .then(res => {
            localStorage.setItem('token', res.data.data.token)
            navigate('/')})
        .catch(error => {
            if (error.response.status === 404) {
                alert("Credenciales invalidas")
            }
        })
        reset({
            email:"",
            password:""
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(submit)} style={{textAlign:'center', paddingTop:'20px'}}>
                <Form.Group style={{maxWidth:'500px'}} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" {...register("email")} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group style={{maxWidth:'500px'}} className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password")} />
                </Form.Group>
                <Button style={{background: '#ff0000', border:'none', color:'white', padding:'10px', borderRadius:'10px', marginBottom:'20px'}} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;