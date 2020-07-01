import React from'react'
import { CardComponet } from './style'
import { useHistory } from 'react-router-dom'

const Card = ({tema}) =>{
  const history = useHistory();
  return(
    <CardComponet
        onClick={() => history.push(`/${tema}`)}
    >
       <h1>{tema}</h1>
     </CardComponet>
  )
}

export default Card