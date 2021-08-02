import React from 'react'
import './tictactoe.css'
import { useState, useEffect } from 'react'

const initialLinha1 = [null, null, null]
const initialLinha2 = [null, null, null]
const initialLinha3 = [null, null, null]
const valorInicial = 'X'
let contador = 0


export default function TicTacToe() {

    const spanStyle = {
        backgroundColor: 'red',
        color: 'white',
    }

    const [valor, setValor] = useState(valorInicial)

    const [linha1, setLinha1] = useState(initialLinha1)
    const [linha2, setLinha2] = useState(initialLinha2)
    const [linha3, setLinha3] = useState(initialLinha3)

    const coluna1 = [linha1[0], linha2[0], linha3[0]]
    const coluna2 = [linha1[1], linha2[1], linha3[1]]
    const coluna3 = [linha1[2], linha2[2], linha3[2]]
    const diagonal1 = [linha1[0], linha2[1], linha3[2]]
    const diagonal2 = [linha1[2], linha2[1], linha3[0]]

    const vencedorX = ["X", "X", "X"]
    const vencedorO = ["O", "O", "O"]

    const [vencedor, setVencedor] = useState(false)
    const [contadorX, setContadorX] = useState(0)
    const [contadorO, setContadorO] = useState(0)

    const mudarValor = () => {
        if(valor === 'X'){
            setValor('O')
        } else if(valor === 'O'){
            setValor('X')
        }
    }

    useEffect(() => {

        // O QUE ACONTECE QUANDO ALTERA UM VALOR DE LINHA1, LINHA2 OU LINHA3
        if(!vencedor){
            if(linha1.toString() === vencedorX.toString()){
                alert('Vencedor é o player "X"')
                setVencedor(true)
                setContadorX(contadorX + 1)
            } else if (linha1.toString() === vencedorO.toString()){
                alert('Vencedor é o player "O"')
                setVencedor(true)
                setContadorO(contadorO + 1)
            }
    
            if(linha2.toString() === vencedorX.toString()){
                alert('Vencedor é o player "X"')
                setVencedor(true)
                setContadorX(contadorX + 1)
            } else if (linha2.toString() === vencedorO.toString()){
                alert('Vencedor é o player "O"')
                setVencedor(true)
                setContadorO(contadorO + 1)
            }
    
            if(linha3.toString() === vencedorX.toString()){
                alert('Vencedor é o player "X"')
                setVencedor(true)
                setContadorX(contadorX + 1)
            } else if (linha3.toString() === vencedorO.toString()){
                alert('Vencedor é o player "O"')
                setVencedor(true)
                setContadorO(contadorO + 1)
            }
    
            if(coluna1.toString() === vencedorX.toString()){
                alert('Vencedor é o player "X"')
                setVencedor(true)
                setContadorX(contadorX + 1)
            } else if (coluna1.toString() === vencedorO.toString()){
                alert('Vencedor é o player "O"')
                setVencedor(true)
                setContadorO(contadorO + 1)
            }
    
            if(coluna2.toString() === vencedorX.toString()){
                alert('Vencedor é o player "X"')
                setVencedor(true)
                setContadorX(contadorX + 1)
            } else if (coluna2.toString() === vencedorO.toString()){
                alert('Vencedor é o player "O"')
                setVencedor(true)
                setContadorO(contadorO + 1)
            }
    
            if(coluna3.toString() === vencedorX.toString()){
                alert('Vencedor é o player "X"')
                setVencedor(true)
                setContadorX(contadorX + 1)
            } else if (coluna3.toString() === vencedorO.toString()){
                alert('Vencedor é o player "O"')
                setVencedor(true)
                setContadorO(contadorO + 1)
            }
    
            if(diagonal1.toString() === vencedorX.toString()){
                alert('Vencedor é o player "X"')
                setVencedor(true)
                setContadorX(contadorX + 1)
            } else if (diagonal1.toString() === vencedorO.toString()){
                alert('Vencedor é o player "O"')
                setVencedor(true)
                setContadorO(contadorO + 1)
            }
    
            if(diagonal2.toString() === vencedorX.toString()){
                alert('Vencedor é o player "X"')
                setVencedor(true)
                setContadorX(contadorX + 1)
            } else if (diagonal2.toString() === vencedorO.toString()){
                alert('Vencedor é o player "O"')
                setVencedor(true)
                setContadorO(contadorO + 1)
            }
        }
        
    }, [linha1, linha2, linha3])


    const jogarNovamente = () => {
        contador++
        setLinha1(initialLinha1)
        setLinha2(initialLinha2)
        setLinha3(initialLinha3)
        setVencedor(false)
        if(vencedor){
            if(contador % 2 !== 0){
                setValor('O')
            } else if(contador % 2 === 0) {
                setValor('X')
            }
        }
    }

    const alteraLinha1 = (indexAlterar) => {
        const novaLinha1 = linha1.map((item, index) => {
            if(item){
                return item
            } else if (vencedor){
                return item
            }
            else if (indexAlterar === index) {
                item = valor
                mudarValor()
            }
            
            return item
            
        })

        setLinha1(novaLinha1)
        
        
    }

    const alteraLinha2 = (indexAlterar) => {
        const novaLinha2 = linha2.map((item, index) => {
            if(item){
                return item
            } else if (vencedor){
                return item
            }
            else if (indexAlterar === index) {
                item = valor
                mudarValor()
            }
            
            return item
        })

        setLinha2(novaLinha2)
        
        
    }

    const alteraLinha3 = (indexAlterar) => {
        const novaLinha3 = linha3.map((item, index) => {
            if(item){
                return item
            }
            else if (vencedor){
                return item
            }
            else if (indexAlterar === index) {
                item = valor
                mudarValor()
            }
            
            return item
        })

        setLinha3(novaLinha3)
        

        
    }

    return (

        <div className='layout'>
            <h1 className='vez-jogar'>Vez de jogar: <span className='valor'>{valor}</span></h1>
            <div className='layout__row'>
                {linha1.map((item, index) => <span onClick={() => { alteraLinha1(index) }}>{item}</span>)}               
            </div>
            <div className='layout__row'>
                {linha2.map((item, index) => <span onClick={() => { alteraLinha2(index) }}>{item}</span>)} 
            </div>
            <div className='layout__row'>
                {linha3.map((item, index) => <span onClick={() => { alteraLinha3(index) }}>{item}</span>)} 
            </div>
            <div className='resultado'>
                <span className='o'>O: {contadorO}</span>
                <span className='o'>X: {contadorX}</span>
            </div>
            <button className='jogar-novamente' onClick={jogarNovamente}>Jogar Novamente</button>
        </div>

    )
}



