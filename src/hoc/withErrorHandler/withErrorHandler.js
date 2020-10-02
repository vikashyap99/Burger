import React, {Component} from 'react';
import Aux from '../Aaux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponents, axios) => {
    return class extends Component  {

        state =  {
            error: null
        }

        componentDidMount(){
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            axios.interceptors.response.use(req => req,error => {
                this.setState({error: error});
            })
        }

        confirmErrorHandler = () => {
            this.setState({error: null});
        }

        render(){
            return (
                <Aux>
                        <Modal show={this.state.error}
                        clicked ={this.confirmErrorHandler} >
                            
                            {this.state.error ? this.state.error.message : null}
                        </Modal>
                        <WrappedComponents  {...this.props} />
                </Aux>
                
            );
        }
       
    }
}

export default withErrorHandler;