import React, { useState, useEffect } from "react";
import GoogleMapsApiKey from "../../config/apiKey";
import GoogleMapsApi from "../../services/googleMapsApi";
import "./styles.css";

export default function NewCourse() {
  const [place, setPlace] = useState("");
  const [placeSelected, setPlaceSelected] = useState({});
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");

  async function handlePlaceChange(textEntry){
    setPlace(textEntry);
    if(place.length >= 4){
      setPlaces([
        {
          id: "1",
          name:
            "UTFPR Campus Curitiba - Avenida Sete de Setembro - Rebouças, Curitiba - State of Paraná, Brazil"
        },
        {
          id: "2",
          name:
            "UTFPR - Avenida João Miguel Caram - Jardim Morumbi, Londrina - State of Paraná, Brazil"
        },
        {
          id: "3",
          name:
            "UTFPR - Avenida Monteiro Lobato - Jardim Carvalho, Ponta Grossa - State of Paraná, Brazil"
        }
      ]);
    }else{
      setPlaces([]);
    }
    setPlaceSelected({});
  }

  function handlePlaceClick(placeClicked){
    setPlaces([]);
    setPlace(placeClicked.name);
    setPlaceSelected(placeClicked);
  }

  return (
    <div className="container new-course">
      <form>
        <h2>Cadastre um novo curso</h2>
        <label htmlFor="place">Qual a universidade?</label>
        <div className="autocomplete-container">
          <input
            type="text"
            id="place"
            value={place}
            onChange={event => handlePlaceChange(event.target.value)}
            autocomplete="off"            
          />
          <input 
            type="hidden"
            id="placeSelected"
            value={placeSelected.id}
          />
          <ul className="suggestions">
            {
              places.map(placeSuggested=>(
                <li 
                  key={placeSuggested.id} 
                  onClick={()=>handlePlaceClick(placeSuggested)}
                >
                  {placeSuggested.name}
                </li>
              ))
            }
          </ul>
        </div>
        <label htmlFor="tags">
          Quais são os cursos? <span>(separe por vírgula)</span>
        </label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={event => setTags(event.target.value)}
        />
        <button type="submit" className="btn">
          Salvar
        </button>
      </form>
    </div>
  );
}
