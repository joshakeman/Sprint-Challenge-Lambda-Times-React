import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        user: '',
        password: ''
      };
  
      this.toggle = this.toggle.bind(this);
    }
    
    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        localStorage.setItem('user', this.state.user)
        localStorage.setItem('password', this.state.password)
    }

    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  
    render() {
      return (
        <div>
          <Button color="danger" onClick={this.toggle}>Log In</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Login to Lambda Times</ModalHeader>
            <ModalBody>
            <form onSubmit={this.props.authenticateLogin} className="login-form"> 
                <input name="user" placeholder="user" onChange={this.handleChanges} className="user-input" />
                <input name="password" placeholder="password" onChange={this.handleChanges} className="password-input" />
                <button onClick={this.login} className="login-button">Login</button>
            </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

export default Login