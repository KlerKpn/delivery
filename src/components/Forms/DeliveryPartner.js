import React from 'react'
import Input from './../UI/Input/Input';
import classes from './FormStyles.module.scss'
import Button from './../UI/Button/Button';

const DeliveryPartner = props => {
    return (
        <div>
            <h2>Станьте нашим партнером</h2>
            <p>Распространяйте продукты и находите новых клиентов с нашим сервисом</p>
            <form>
                <div className={classes.Step}>
                    <span>Имя вашей компании</span>
                    <Input />
                </div>
                <div className={classes.Step}>
                    <span>Ссылка на веб-сайт</span>
                    <Input />
                </div>
                <div className={classes.Step}>
                    <span>Email для связи</span>
                    <Input />
                </div>
                <Button
                    type='dark'
                >
                    Отправить запрос
                </Button>
            </form>
        </div>
    )
}

export default DeliveryPartner