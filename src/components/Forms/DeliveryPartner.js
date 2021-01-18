
import React from 'react'
import Input from './../UI/Input/Input';
import classes from './FormStyles.module.scss'
import Button from './../UI/Button/Button';

const DeliveryPartner = props => {
    return (
        <div>
            <h2>Станьте нашим курьером</h2>
            <p>Доставляйте продукты компаний и получайте вознаграждение</p>
            <form>
                <div className={classes.Step}>
                    <span>ФИО</span>
                    <Input />
                </div>
                <div className={classes.Step}>
                    <span>Телефон для связи</span>
                    <Input />
                </div>
                <div className={classes.Step}>
                    <span>У вас есть опыт работы курьером?</span>
                    <div className={classes.Step}>
                        <div>

                            <label for="yes">Да
                            <input type="radio" id="yes"
                                    name="skill" value="Да" />
                            </label>

                            <label for="no">Нет
                            <input type="radio" id="no"
                                    name="skill" value="no" />
                            </label>
                        </div>
                    </div>
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