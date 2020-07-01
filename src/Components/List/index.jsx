import React from 'react'

import { ListComponent } from './style'

import Table from '../Table'
import CardList from '../CardList'

const List = ({ tema }) =>{
  return(
<ListComponent>
   {
        tema === 'todos' ?
        <Table/>:
        <CardList tema={tema}/>
   }
  </ListComponent>
    )
}
export default List
