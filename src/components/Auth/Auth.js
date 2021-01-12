import React, { useState, useEffect } from 'react'
import Input from '../UI/Input/Input'
import classes from './Auth.module.scss'
import Button from './../UI/Button/Button';

const Auth = () => {

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const [formControls, setFormControls] = useState({
        email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMessage: 'Введите корректный email',
            valid: false,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        },
        password: {
            value: '',
            type: 'password',
            label: 'Password',
            errorMessage: 'Введите корректный password',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 6
            }
        }
    })

    function renderInput() {
        return Object.keys(formControls).map((el, index) => {
            const control = formControls[el]
            return (
                <Input
                    key={el + index}
                    value={control.value}
                    type={control.type}
                    label={control.label}
                    valid={control.valid}
                    errorMessage={control.errorMessage}
                    touched={control.touched}
                    shouldValidate={!!control.valid}
                    onChange={event => inputChangeHandler(event.target.value, el)}
                />
            )
        })
    }

    function inputChangeHandler(value, controlName) {
        const copyFormControls = { ...formControls }
        const control = copyFormControls[controlName]

        control.value = value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)
        copyFormControls[controlName] = control
        setFormControls(prev => prev = copyFormControls)
    }

    function validateControl(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    useEffect(() => {
        console.log(formControls.email)
    }, [formControls])

    function loginHandler() {

    }

    function registerHandler() {

    }

    function submitHandler(event) {
        event.preventDefault()
    }

    return (
        <div className={classes.Auth}>
            <h2>Авторизация</h2>
            <form onSubmit={submitHandler}>

                {renderInput()}

                <Button

                    type='primary'
                >
                    Войти
                </Button>
                <Button
                    type='dark'
                >
                    Регистрация
                </Button>
            </form>
        </div>
    )
}

export default Auth