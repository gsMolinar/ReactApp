import React,{ Component } from "react";
class CounterProducts extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        console.log("Componente montado");
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    };
    handleDecrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    };
    render(){
        return(
            <div>
                <p>Contador: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Agregar producto</button>
                <button onClick={this.handleDecrement}>Eliminar producto</button>
            </div>
        );
    }
}
export default CounterProducts;
