import React from 'react'
import Input from '../UI/Input/Input'
import classes from './Auth.module.scss'
import Button from './../UI/Button/Button';

const Auth = () => {

    function submitHandler(event) {
        event.preventDefault()
    }

    return (
        <div className={classes.Auth}>
            <h2>Авторизация</h2>
            <form onSubmit={submitHandler}>
                <Input
                type='email' />
                <Input  type='password'/>
                <Button
                    type='primary'
                >
                    Войти
                </Button>

            </form>
        </div>
    )
}

export default Auth