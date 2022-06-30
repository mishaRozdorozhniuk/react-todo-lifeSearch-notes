import React, { useState, useContext } from 'react'
import { Input } from '../../components/Input/Input'
import { AuthContext } from '../../context'
import './Login.css'

export const Login = () => {
    const {setIsAuth, setNickName} = useContext(AuthContext)
    const [userName, setUserName] = useState('')

    const login = e => {
        e.preventDefault()
        setIsAuth(true)
        setNickName(userName);
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <Input 
                type="text" 
                className={userName === '' ? 'has-error' : 'has-success'} 
                placeholder="Введите имя" 
                onChange={(e) => setUserName(e.target.value)} />    
                <button disabled={userName === '' ? true : false}>Enter</button>
            </form>
        </div>
    )
}