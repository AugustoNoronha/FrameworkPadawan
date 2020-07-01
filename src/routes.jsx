
import React from 'react'
import{BrowserRouter,Switch,Route} from 'react-router-dom'
import Menu from './pages/Menu'
import Exibicao from './pages/Exibicao'



export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>  

      <Route path='/' exact component={Menu}/>
      <Route path='/:tema' exact component={Exibicao}/>
      

    </Switch>
    </BrowserRouter>
  )
}