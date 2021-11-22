import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'

const Welcome = () => {
    return (
        <div className="App">
            <div className="logo">
                <h1><span>Dresden Library</span></h1>
                <div className="content">
                    <div className="box-title">
                        <h2>The best library in Dresden</h2>
                    </div>
                    <div className="box-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo corrupti nam eligendi doloremque placeat, quia impedit deleniti nostrum laboriosam hic!</p>
                    </div>
                    <Button variant="primary">Find books</Button>
                    <Button variant="outline-primary">Register</Button>
                    <div className="box-login">
                        <p><span>Already registed? </span>
                            <a href="/login">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
