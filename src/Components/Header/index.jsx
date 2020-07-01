import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { HeaderComponent,Item } from './style'
import { MdArrowBack } from 'react-icons/md'

const Header = () =>{
    const { tema } = useParams()
    const [main, setMain] = useState(false)
    const history = useHistory()

    useEffect(() => {
      if(tema === undefined){
       return  setMain(true);

      }  
      if (tema !== 'posts' &&
           tema !== 'todos' &&
           tema !== 'albums'){

        return history.push('/')
      } 
     },[ tema ,history ]) 

     
  return(
    <HeaderComponent>
      {
        main ?
        <h1>HOME</h1> :

           <ul>

             <li onClick={() => history.push('/')}>
                <MdArrowBack size={24} />
             </li>


           <Item 
              active ={tema === 'posts'}
              onClick={()=>history.push('/posts')}
           >
             Postagem
           </Item>

           <Item 
              active ={tema === 'todos'}
              onClick={()=>history.push('/todos')}
              >
                To-Dos
            </Item>

           <Item 
              active ={tema === 'albums'}
              onClick={()=>history.push('/albums')}
              
              >
                Álbuns
              
            </Item>
         </ul>
      }
     
    </HeaderComponent>
  )
}

export default Header