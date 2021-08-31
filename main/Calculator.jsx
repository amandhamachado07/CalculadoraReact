import React, {Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const inicialState ={
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}

export default class Calculator extends Component{

  state = {...inicialState}



  clearMemory(){
    this.setState({...inicialState})
  }
  render(){
    clearMemory(){
      console.log('limpar')
    }

    setOperation(operation){
      if(this.state.current === 0){
      this.setState({operation, current: 1, clearDisplay: true})
      } else {
        const equals = operation === '='
        const currentOperation = this.state.operation

        const values = [...this.state.values]
       switch(currentOperation){
         case '+':
           values[0] = values[0] + values[1]
           break
           case'-':
            values[0] = values[0] - values[1]
             break
           case'/':
            values[0] = values[0] / values[1]
             break
           case'*':
            values[0] = values[0] * values[1]
            break
            default:

            this.setState({
              displayValue: values[0],
              operation: equals ? null : operation,
              current: equals ? 0 : 1,
              clearDisplay: !equals,
              values})
       }
       }

addDigito(n) {
  if(n === '.' && this.state.displayValue.includes('.')){
    return
  }
}

const clearDisplay = this.state.displayValue ==='0'
|| this.state.clearDisplay

const currentValue = clearDisplay ? '|' : this.state.displayValue

const displayValue = ({currentValue, clearDisplay:  false})

if (n !== '.'){

  const i = this.state.current

  const newValue = parseFloat(displayValue)

  const values = [...this.state.value]

  value[i] = newValue

  this.setState({values})

  console.log(values)
  }
}

constructor(props){
  super(props)
  this.clearMemory = this.clearMemory.bind(this)
  this.setOperation = this.setOperation.bind(this)
  this.addDigito = this.addDigito.bind(this)
}
render(){
    return(
      <div className="Calculator">
        <Display value={this.state.displayValue}/>
                <Button label = "AC" click={this.claerMemory} triple/>
                <Button label = "/" click={this.setOperation} operations/>
                <Button label = "7" click={this.addDigito}/>
                <Button label = "8"click={this.addDigito}/>
                <Button label = "9"click={this.addDigito}/>
                <Button label = "*"click={this.setOperation} operation/>
                <Button label = "4"click={this.addDigito}/>
                <Button label = "5"click={this.addDigito}/>
                <Button label = "6"click={this.addDigito}/>
                <Button label = "-"click={this.setOperation} operation/>
                <Button label = "1"click={this.addDigito}/>
                <Button label = "2"click={this.addDigito}/>
                <Button label = "3"click={this.addDigito}/>
                <Button label = "+"click={this.setOperation} operation/>
                <Button label = "0"click={this.addDigito} double/>
                <Button label = "."click={this.setOperation}>
                <Button label = "="click={this.setOperation} operation/>
      </div>
    )
  }
}
