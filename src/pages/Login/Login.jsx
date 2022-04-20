import React, { useContext } from 'react'
import { Input } from '../../components/Input/Input'
import { AuthContext } from '../../context'
import './Login.css'

export const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = e => {
        e.preventDefault()
        setIsAuth(true)
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder="Введите логин" />
                <Input type="password" placeholder="Введите пароль"/>
                <button>Enter</button>
            </form>
        </div>
    )
}