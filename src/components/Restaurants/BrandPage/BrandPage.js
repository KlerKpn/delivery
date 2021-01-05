import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import classes from './BrandPage.module.scss'
import { connect } from 'react-redux'

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
        console.log(tabsData)
        const tabs = (
            <Tabs>
                <TabList>
                    {
                        [...tabsData].map(el => {
                            return (
                                <Tab>{el}</Tab>
                            )
                        })
                    }
                </TabList>
                {
                    [...tabsData].map(el => {
                        
                        return (
                            <TabPanel>
                                {el}
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
                    ? <div className={classes.Brand}>
                        <div>{brand.label}</div>
                        <div>{brand.say}</div>



                        {tabsGenerator()}






                        {
                            dishList
                                ? dishList.map(el => {
                                    return (
                                        <div
                                            className={classes.dish}
                                        >
                                            <div>{el.label}</div>
                                        </div>
                                    )
                                })
                                : null
                        }
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