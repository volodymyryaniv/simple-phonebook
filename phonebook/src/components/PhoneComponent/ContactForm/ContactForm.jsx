import { Component } from "react";

export default class ContactForm extends Component {
   state = {
      name: "",
      number: "",
   };
   getDataHandler = (e) => {
      const { name } = e.target;
      this.setState({ [name]: e.target.value });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      const { name, number } = this.state;
      this.props.addContacts(name, number);
      this.setState({
         name: "",
         number: "",
      });
   };

   render() {
      const { name, number } = this.state;
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <label htmlFor="name"> Name </label>
               <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.getDataHandler}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name"
                  required
               />
               <label htmlFor="number"> Number </label>
               <input
                  id="number"
                  type="tel"
                  name="number"
                  value={number}
                  onChange={this.getDataHandler}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title=""
                  required
               />
               <button type="submit">Add contact</button>
            </form>
         </div>
      );
   }
}
