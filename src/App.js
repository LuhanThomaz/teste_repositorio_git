import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: '',
      mensagem: '',

    }
    this.insereEmail = this.insereEmail.bind(this);
    this.insereSenha = this.insereSenha.bind(this);
    this.acaoClick = this.acaoClick.bind(this);
  }

 
  insereEmail(event) {
    this.setState({ email: event.target.value });
  }

  insereSenha(event) {
    this.setState({ senha: event.target.value });
  }

  acaoClick() {
    const { email, senha } = this.state;
    const emailCorreto = 'luhan.thomaz@pucpr.br';
    const senhaCorreta = '123456';

    if (email === emailCorreto && senha === senhaCorreta) {
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          size="20"
          name="email"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.insereEmail}
        />
        <br />
        <input
          type="password"
          size="20"
          name="password"
          placeholder="Senha"
          value={this.state.senha}
          onChange={this.insereSenha}
        />
        <br />
        <button onClick={this.acaoClick}>Acessar</button>
        <br />
        <label>{this.state.mensagem}</label>
      </div>
    );
  }
}

export default App;