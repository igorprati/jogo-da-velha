import React from 'react'
import './tictactoe.css'
import { useState, useEffect } from 'react'

const initialLinha1 = [null, null, null]
const initialLinha2 = [null, null, null]
const initialLinha3 = [null, null, null]

export default function TicTacToe() {

    const [valor, setValor] = useState('X')
    const [linha1, setLinha1] = useState(initialLinha1)
    const [linha2, setLinha2] = useState(initialLinha2)
    const [linha3, setLinha3] = useState(initialLinha3)
    const vencedorX = ["X", "X", "X"]
    const vencedorO = ["O", "O", "O"]

    const coluna1 = [linha1[0], linha2[0], linha3[0]]
    const coluna2 = [linha1[1], linha2[1], linha3[1]]
    const coluna3 = [linha1[2], linha2[2], linha3[2]]
    const diagonal1 = [linha1[0], linha2[1], linha3[2]]
    const diagonal2 = [linha1[2], linha2[1], linha3[0]]

    function verificaVencedor(){
        if(linha1 === vencedorO){
            alert('O vencedor foi O')
        } else if(linha1 === vencedorX){
            alert('O vencedor foi X')
        }

        if(linha2 === vencedorO){
            alert('O vencedor foi O')
        } else if(linha2 === vencedorX){
            alert('O vencedor foi X')
        }

        if(linha3 === vencedorO){
            alert('O vencedor foi O')
        } else if(linha3 === vencedorX){
            alert('O vencedor foi X')
        }

        if(coluna1 === vencedorO){
            alert('O vencedor foi O')
        } else if(coluna1 === vencedorX){
            alert('O vencedor foi X')
        }

        if(coluna2 === vencedorO){
            alert('O vencedor foi O')
        } else if(coluna2 === vencedorX){
            alert('O vencedor foi X')
        }

        if(coluna3 === vencedorO){
            alert('O vencedor foi O')
        } else if(coluna3 === vencedorX){
            alert('O vencedor foi X')
        }

        if(diagonal1 === vencedorO){
            alert('O vencedor foi O')
        } else if(diagonal1 === vencedorX){
            alert('O vencedor foi X')
        }

        if(diagonal2 === vencedorO){
            alert('O vencedor foi O')
        } else if(diagonal2 === vencedorX){
            alert('O vencedor foi X')
        }
    }

    // useEffect(() => {

    //     // O QUE ACONTECE QUANDO ALTERA UM VALOR DE LINHA1, LINHA2 OU LINHA3
    //     verificaVencedor()

    // }, [linha1, linha2, linha3])



    const jogarNovamente = () => {
        setLinha1(initialLinha1)
        setLinha2(initialLinha2)
        setLinha3(initialLinha3)
    }

    const alteraLinha1 = (indexAlterar) => {
        const novaLinha1 = linha1.map((item, index) => {
            if(item){
                return item
            }
            else if (indexAlterar === index) {
                item = valor
                if (valor === 'X') {
                    setValor('O')
                } else if (valor === 'O') {
                    setValor('X')
                }
            }
            
            return item
            
        })

        setLinha1(novaLinha1)
        verificaVencedor()
        
    }

    const alteraLinha2 = (indexAlterar) => {
        const novaLinha2 = linha2.map((item, index) => {
            if(item){
                return item
            }
            else if (indexAlterar === index) {
                item = valor
                if (valor === 'X') {
                    setValor('O')
                } else if (valor === 'O') {
                    setValor('X')
                }
            }
            
            return item
        })

        setLinha2(novaLinha2)
        verificaVencedor()
        
    }

    const alteraLinha3 = (indexAlterar) => {
        const novaLinha3 = linha3.map((item, index) => {
            if(item){
                return item
            }
            else if (indexAlterar === index) {
                item = valor
                if (valor === 'X') {
                    setValor('O')
                } else if (valor === 'O') {
                    setValor('X')
                }
            }
            
            return item
        })

        setLinha3(novaLinha3)
        verificaVencedor()

        
    }


    return (
        <>
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
            <button className='jogar-novamente' onClick={jogarNovamente}>Jogar Novamente</button>
        </div>
        </>
    )
}

