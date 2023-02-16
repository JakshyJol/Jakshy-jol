import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { Header } from '../Header/Header'
import './Layout.css'

export const Layout = () => {
    return (
        <div className='page'>
            <header>
                <Header/>
            </header>
            <main>
                <div className='main-container'>
                <Outlet />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
