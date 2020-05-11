import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    //state del login
    const [usuario,guardarUsuario] = useState({
        email: '',
        password : ''
    })

    //extraigo lo valores del state
    const {email,password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    return (
        
        <div className="container">
            
                <form className="login-form">
                    <h1>Login</h1>
                    <div className="login-wrap">
                        <p className="login-img"><i className="icon_lock_alt"></i></p>

                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon_profile"></i></span>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="User Email" 
                                id="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon_key_alt"></i></span>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>

                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                        <Link
                            to={'/signup'} 
                            className="btn btn-info btn-lg btn-block"
                        >
                            Signup
                        </Link>
                    </div>
                </form>
        </div>
     );
}
 
export default Login;