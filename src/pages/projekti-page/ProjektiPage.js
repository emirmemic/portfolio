import React from "react"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Projekti from "../../components/projekti/projekti"

export default function HomePage(){
    return(
        <div>
            <Header></Header>
            <Projekti></Projekti>
            <Footer></Footer>
        </div>
        
    )
}