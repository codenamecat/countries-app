import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout(props) {

    return (
        <>
            <Header darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
            <Outlet />
        </>
    )
}