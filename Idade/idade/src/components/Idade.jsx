import React, { useState } from "react";

export default props => {

    const [ano, setAno] = useState(0)
    const [mes, setMes] = useState(0)
    const [dia, setDia] = useState(0)
    const [render, setRender] = useState("")

    
    const calcular = () => {
        let data = new Date()
        let anoAtual = data.getFullYear();
        let mesAtual = data.getMonth() + 1
        let diasTotal = data.getDate()

        let qtdAnos = anoAtual - ano

        let totalDias = 0
        
        let date = new Date(anoAtual, mes, 0)
        let diaDoMes = date.getDate()

        let qtdDias = (diaDoMes - dia)

        if (anoAtual % 4 === 0 && !anoAtual % 100 === 0 || anoAtual % 400 === 0) {
            totalDias = diasTotal + qtdDias + 1
        }else{
            totalDias = diasTotal + qtdDias
        }

        if (mesAtual === mes) return 0
        if (mesAtual < mes) [mesAtual, mes] = [mes, mesAtual]

        let array = []
        for (let i = mes + 1; i < mesAtual; i++) {
            array.push(i)
        }

        setRender(`Você tem ${qtdAnos} anos, ${array.length} meses e ${totalDias} dias`)
    }

    return (
        <div>
            <label htmlFor="ano">Ano</label>
            <input type="number" onChange={e => setAno(+e.target.value)}/>
            <label htmlFor="mes">Mês</label>
            <input type="number" onChange={e => setMes(+e.target.value)}/>
            <label htmlFor="dia">Dia</label>
            <input type="number" onChange={e => setDia(+e.target.value)}/>
            <button type="button" onClick={() => calcular()}>Calcular</button>
            <p>{render}</p>
        </div>
    )
}
