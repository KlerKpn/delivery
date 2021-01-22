import React from 'react'
import styles from './ToggleCount.module.scss'

const ToggleCount = props => {
    return (
        <div className={styles.ToggleCount}>
            <button
                onClick={props.onPlus}
                className={styles.countBtn}
            >
                <i className="fas fa-chevron-up" />
            </button>
            <div className={styles.count}>
                {props.count}
            </div>
            <button
                className={styles.countBtn}
                onClick={props.onMinus}
            >
                <i className="fas fa-chevron-down" />
            </button>
        </div>
    )
}

export default ToggleCount