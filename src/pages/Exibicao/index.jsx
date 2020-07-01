import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import List from '../../Components/List'

import { ExibicaoPage } from './style';

const Exibicao = () =>{
  const { tema } = useParams()
  return(
    <ExibicaoPage>
    <Header/>
    <List tema={ tema }/>
    </ExibicaoPage>
  )
}

export default Exibicao


