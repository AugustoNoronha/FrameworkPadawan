import React from 'react'
import Header from '../../Components/Header'
import Card from "../../Components/Card"
import { MainPage,ThemeList }  from './styled'

const Menu = () =>{
  return(
    <MainPage>
      <Header/>
      <ThemeList>

        <Card tema={'posts'} />
        <Card tema={'todos'} />
        <Card tema={'albums'} />
        

      </ThemeList>
    </MainPage>
  )
}

export default Menu
