import React from 'react'
import CardList from '../Components/Card/CardList'
import Header from '../Components/Header/Header'
import NavBar from '../Components/NavBar/NavBar'

function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <CardList content={"Our services & clinics"} />
            <CardList content={"Our Doctors"} />

        </div>
    )
}

export default Home
