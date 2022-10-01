import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerMain, IMG } from "./main-style";

export default function Api() {
  const [info, setInfo] = useState([]);
  const API = "https://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(API)
      .then((resposta) => {
        setInfo(resposta.data);
      })
      .catch((error) => {
        console.log("desculpe houve falha ao requisar a api", error);
      });
  }, []);

  return (
    <div>
      {info.map((item) => (
        <ContainerMain>
          <div>
            <div>
              <h3>Nome</h3>
              <p>{item.name}</p>
            </div>

            <div>
              <h3>Casa:</h3>
              <p>{item.house}</p>
            </div>

            <div>
              <h3>Ator no filme:</h3>
              <p>{item.actor}</p>
            </div>
          </div>

          <figure>
            <IMG src={item.image} alt={item.name} />
          </figure>
        </ContainerMain>
      ))}
    </div>
  );
}
