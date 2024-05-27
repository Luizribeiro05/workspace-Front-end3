import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function defineMensagem(mes){
        if (mes === "setembro") {
            return "Prevenção ao suicídio."
        } else if (mes === "outubro"){
            return "Concientização sobre o cancer de mama."
        } else {
            return "Prevenção e cobate ao câncer de protata"
        }
    }
    function defineCorDeFundo(mes){
        if (mes == "setembro"){
            return styles.setembroClass
        } else if (mes === "outubro"){
            return styles.outubroClass
        } else{
            return styles.novembroClass
        }
    }

  return (
    <div className={defineCorDeFundo(props.mes)}>
        {defineMensagem(props.mes)}
    </div>
  )
}

export default Campanha