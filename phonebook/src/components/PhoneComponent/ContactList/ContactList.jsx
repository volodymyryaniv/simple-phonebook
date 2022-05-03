import { Component } from "react";

export default class ContactList extends Component {
   render() {
      return (
         <ul>
            {this.props.contacts.map((el) => {
               return (
                  <span key={el._id}>
                     <li>
                        {el.name} : {el.number}{" "}
                        <button onClick={() => this.props.handlerDelete(el._id)}>
                           {" "}
                           Del{" "}
                        </button>
                     </li>
                  </span>
               );
            })}
         </ul>
      );
   }
}
