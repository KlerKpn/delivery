import React from 'react'
import classes from './Search.module.scss'

const Search = props => {
    return (
        <div className={classes.Search}>
            <input
                className={classes.input}
                placeholder='Поиск'
                onChange={event => props.onChange(event.target.value)}
            />
        </div>
    )
}

export default Search