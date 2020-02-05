import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import github from '../../assets/images/github.png';
import './styles.css';

export default function InputTag() {
  const [inputTagValue, setInputTagValue] = useState("");
  const tags = useSelector(state=> state.data);
  const dispatch = useDispatch();

  function handleSubmitNewTag(event){
    event.preventDefault();
    if(inputTagValue)
    {
      dispatch({type: 'ADD_TAG', tagValue: inputTagValue.trim().toLowerCase()});
      setInputTagValue("");
    }
  }

  function handleRemoveTagClick(id){
    dispatch({type: 'REMOVE_TAG', idToRemove: id});
  }

  return (
    <div className="tags-container">
      <div className="input-container">
        <form onSubmit={handleSubmitNewTag}>
          <input 
            id="tags" 
            type="text" 
            placeholder="Digite as tags da sua pesquisa"
            value={inputTagValue}
            onChange={event => setInputTagValue(event.target.value)} 
          />
          <button type="submit">+</button>
        </form>
      </div>
      <div className="tags-bag">
        {
          tags.map((tagItem, id)=>(
            <small 
              className="chip" 
              key={id}
            >
              {tagItem} 
              <span onClick={()=>handleRemoveTagClick(id)}>x</span>
            </small>
          ))
        }
      </div>
      <Link to="/new-course" className="btn">Novo Curso</Link>

      <div className="information">
        <p>
          Este projeto é uma iniciativa open-source com o intuito
          de, por meio da comunidade de desenvolvedores e estudantes
          de todo o Brasil, ajudar calouros de qualquer área a encontrarem
          um câmpus pra chamar de seu.
        </p>
        <footer className="github-logo">
          <a href="https://github.com/josemoraes" target="_blank">
            <img src={github} alt="Colabore com nosso projeto no Github"/>
          </a>
        </footer>        
      </div>
    </div>
  );
}
