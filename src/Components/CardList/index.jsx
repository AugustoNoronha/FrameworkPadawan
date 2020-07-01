import React, { useEffect, useState } from 'react';

import { CardListComponent, Card, CardListPage } from './style';
import api from '../../utils/api';

const CardList = ({ tema }) => {
    const [data, setData] = useState([]);
    const [word, setWord] = useState('')
    const [filtereData, setFilteredData] = useState(data)

    useEffect(() => {
        api.get(`/${tema}`)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err));
    }, [tema])

    useEffect(() => {
      const newArray = data.filter(e => e.title.indexOf(word) !== -1);
      setFilteredData(newArray);
  }, [word, data])

  useEffect(() =>{
    setFilteredData(data)
  },[data])

    return(
<CardListPage>
<div>
<input 
                    type="text"
                    value={word}
                    onChange={e => setWord(e.target.value)}
                />
</div>

        <CardListComponent>
            {
                tema === 'posts' ?
                filtereData.map(item => (
                    <Card key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </Card>
                )) :
                filtereData.map(item => (
                    <Card key={item.id}>
                        <h1>{item.title}</h1>
                    </Card>
                ))
            }
        </CardListComponent>
        </CardListPage>
    );
};

export default CardList;