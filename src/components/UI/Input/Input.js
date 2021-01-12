import React from 'react'
import classes from './Input.module.scss'

const Input = props =>{

    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    function isInvalid({valid, touched, shouldValidate}){
        console.log('check : ', !valid && touched && shouldValidate)
        if(touched){
            return !(valid && shouldValidate)
        }
        
    }

    if(isInvalid(props)){
        cls.push(classes.invalid)
    }

    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                id={htmlFor} 
                type={inputType}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeHolder}
            />
                {
                    isInvalid(props)
                    ? <span>{props.errMessage || 'Введите верное значение'}</span>
                    : null
                }
        </div>
    )
}

export default Input