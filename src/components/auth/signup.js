import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Sigup = () => {

    //state de signup
    const [registro, guardarRegistro]= useState({
        nombre: '',
        email:'',
        password: '',
        confirmar: ''
    })

    //Extraigo los valores del state
    const {nombre,email,password,confirmar} = registro

    const onChange = e => {
        guardarRegistro({
            ...registro,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <div className="container">
            
                <form className="login-form">
                    <h1>Signup</h1>
                    <div className="login-wrap">
                        <p className="login-img"><i className="icon_lock_alt"></i></p>

                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon_profile"></i></span>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Username" 
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={onChange}
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon_profile"></i></span>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Email" 
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
 
                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon_key_alt"></i></span>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm Password"
                                id="confirmar"
                                name="confirmar"
                                value={confirmar}
                                onChange={onChange}
                            />
                        </div>

                        <button className="btn btn-info btn-lg btn-block" type="submit">Signup</button>
                        <Link
                            to={'/'}
                            className="btn btn-primary btn-lg btn-block"
                        >
                            Back Login
                        </Link>
                    </div>
                </form>
        </div>
     );
}
 
export default Sigup;