import React, {Component} from 'react'

class CContents extends Component {
    
    constructor(){
        super()
        this.state = {msg: 'Witaj użytkowniku. Kliknij przycisk aby poznać wiadomość'}
        console.log('Przycisk został wciśnięty.');
      // this.changeMsg = this.changeMsg.bind(this);
    }

    changeMsg = () => {
        this.setState({msg: 'Własnie jestes uczestnikiem kursu React, gratulacje!'})
    }


    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMsg}>Kliknij, aby poznać tajemnicę</button>
            </div>
        )
    }

}

export default CContents