import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const LoginForm = () => {
    return (
        <div className="login-box">
            <h1>Login</h1>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="username"
                aria-label="username"
                aria-describedby="basic-addon2"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon2"
                />
            </InputGroup>
            <Button variant="primary">Submit</Button>

        </div>
    )
}

export default LoginForm
