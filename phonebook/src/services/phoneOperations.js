import actions from '../actions/phonebookActions'
import axios from 'axios';

const operationAddContact = text => dispatch => {
   dispatch(actions.addRequestToServerAction());

   axios
      .post('http://localhost:4000/contacts', text)
      .then(response => {
         console.log(response.data)
         dispatch(actions.addSuccesToServerAction(response.data))
      }).catch(error => dispatch(actions.addErrorToServerAction(error)));
};

const operationGetContact = () => dispatch => {
   dispatch(actions.getRequestToServerAction());

   axios
      .get('http://localhost:4000/contacts')
      .then(response => {
         console.log(response.data)
         dispatch(actions.getSuccesToServerAction(response.data))
      }).catch(error => dispatch(actions.getErrorToServerAction(error)));
};


export default {
   operationAddContact,
   operationGetContact
}