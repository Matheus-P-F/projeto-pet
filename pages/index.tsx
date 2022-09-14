import type { NextPage } from 'next'
import React, { createRef, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { off } from 'process';

//const data = require('public/data/data.tsx');

function Home() {

  let [animal, setAnimal] = useState<any>({});

  const [lista, setLista] = useState<any>([]);

  const onChange = (event) => {
    setAnimal({
      ...animal,
      [event.target.id]: event.target.value
    })
    

  };



  function onSubmit(event) {
    event.preventDefault()
    console.log(animal)
    event.target.reset();
    setLista([
      ...lista,
      animal,
    ])
    setAnimal({})

  }




  return (
    <>
      <div id={styles.divEnglobaImagemForm}>

        <div className={styles.fundoImagem}>


          <h1 id={styles.tituloEnthus}>PET-ENTHUS</h1>

          <div id={styles.logoEnthus}>
            <Image src='/../public/images/image1.png' alt="logo Enthus" width='100%' height="100%" />
          </div>

          <div className={styles.divFotoCachorro}>

            <Image src="/../public/images/pet-enthus1.png" alt="imagem cachorro" width={'327px'} height={'327px'} />

          </div>

        </div>


        <div className={styles.boxGray}>
          <form onSubmit={onSubmit}>
            <div className={styles.campoForm}>
              <label htmlFor="nomeDoPet">Nome do pet:</label><br />
              <input type="text" onChange={onChange} id="nomeDoPet" name='matheus' className={styles.campoFormText} placeholder='Digite o nome do pet' required />
            </div>

            <div className={styles.campoForm}>
              <label htmlFor="standard-select">O pet é um(a)</label>
              <select id="select" onChange={onChange} placeholder='Tipo de animal' className={styles.campoFormText} required >


                <option value="" color={'gray'} disabled selected hidden >Tipo de pet</option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Papagaio">Papagaio</option>

              </select>
            </div>
            
            <div className={styles.campoForm}>
              <label htmlFor="raca">Da raça:</label><br />
              <input type="text" id="raca" onChange={onChange} className={styles.campoFormText} placeholder='SRD' required/>
            </div>

            <div className={styles.campoForm}>
              <label htmlFor="tutor">Nome tutor:</label><br />
              <input type="text" id="tutor" onChange={onChange} className={styles.campoFormText} placeholder='Nome do humano' required/>
            </div>

            <div className={styles.campoForm}>
              <label htmlFor="celular">Telefone:</label><br />
              <input type="tel" id="celular" pattern={'^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$'} onChange={onChange} maxLength={15} className={styles.campoFormText} placeholder='digite celular' required />
            </div>

            <div className={styles.campoForm}>
              <label htmlFor="email">Email:</label><br />
              <input type="email" onChange={onChange} id="email" className={styles.campoFormText} placeholder='digite email'required />
            </div>

            <div className={styles.campoForm}>
              <button type='submit' className={styles.campoFormText} id={styles.buttonForm}>Submit</button>
            </div>
          </form>
        </div>

      </div>

      <div className={styles.englobaDados}>
        <div className={styles.cabecalhoDados}>

          <div className={styles.respostaDadosTamanho}>Nome do pet</div>

          <div className={styles.respostaDadosTamanho}>O pet é um(a)</div>

          <div className={styles.respostaDadosTamanho}>Da raça</div>

          <div className={styles.respostaDadosTamanho}>Seu tutor(a) se chama:</div>

          <div className={styles.respostaDadosTamanho}>Celular do tutor(a)</div>

          <div className={styles.respostaDadosTamanho}>Email do tutor(a)</div>

        </div>

        <div>

          {lista.map((element) =>

            <tr className={styles.respostaDados} key={Math.random()}>
              <td className={styles.respostaDadosTamanho}>
                {element.nomeDoPet}
              </td>
              <td className={styles.respostaDadosTamanho}>
                {element.select}
              </td>

              <td className={styles.respostaDadosTamanho}>
                {element.raca}
              </td>
              <td className={styles.respostaDadosTamanho}>
                {element.tutor}
              </td>
              <td className={styles.respostaDadosTamanho}>
                {element.celular}
              </td>
              <td className={styles.respostaDadosTamanho}>
                {element.email}
              </td>



            </tr>

          )}
        </div>
      </div>
    </>
  )
}

export default Home
