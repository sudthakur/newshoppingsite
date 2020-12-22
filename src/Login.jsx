import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
    return (
        <div className="login_div">
            <h4>Sign in</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <label>User Name</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" placeholder="Enter Your Username"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Password</label>
                    </div>
                    <div className="col-md-8">
                        <input type="password" placeholder="Enter your Password"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-8">
                        <button className="btn button-outline btn-secondary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
