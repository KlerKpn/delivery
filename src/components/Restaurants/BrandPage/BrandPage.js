import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import classes from './BrandPage.module.scss'
import { connect } from 'react-redux'
import Item from './../../Item/Items'
import BG from '../../../assets/image/BG.jpg'

const BrandPage = props => {
    // console.log(props.match.params.id, props.brand)

    const [brand, setBrand] = useState()
    const [dishList, setDishList] = useState()

    function getBrand() {
        props.brand.forEach(el => {
            if (el.label === props.match.params.id) {
                setBrand(prev => prev = el)
            }
        })
    }

    function getDishList() {
        const list = props.dishList.filter((el) => {
            if (el.brand === props.match.params.id) {
                return el
            }
        })
        setDishList(prev => prev = list)
    }

    useEffect(() => {
        getDishList()
        getBrand()


    }, [])

    function tabsGenerator() {
        const tabsData = new Set(dishList.map(el => el.type))
        const tabs = (
            <Tabs>
                <TabList>
                    {
                        [...tabsData].map(el => {
                            const key = el + Math.floor(Math.random() * 10000)
                            return (
                                <Tab
                                    key={key}
                                    className={classes.BrandPage_tab}
                                >
                                    {el}
                                </Tab>
                            )
                        })
                    }
                </TabList>

                {
                    [...tabsData].map(element => {
                        return (
                            <TabPanel>
                                <div className={classes.Type_Title}>{element}</div>
                                <div className={classes.Tab_panel}>
                                    {dishList.map(el => {
                                        if (element === el.type)
                                            return (
                                                <Item el={el} />
                                            )
                                    })}
                                </div>
                            </TabPanel>
                        )
                    })
                }

            </Tabs>
        )
        return tabs
    }

    return (
        <>
            {
                brand
                    ? <div className={classes.BrandPage}>
                        <div className={classes.Brand_BG} />
                        {tabsGenerator()}
                    </div>
                    : null
            }
        </>
    )
}

function mapStateToProps(state) {
    return {
        brand: state.restrReducer.data,
        dishList: state.dishReducer.data
    }
}

export default connect(mapStateToProps)(BrandPage)