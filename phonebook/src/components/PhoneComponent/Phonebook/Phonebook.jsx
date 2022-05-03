import {useState } from "react";
import ContactForm from "../ContactForm/";
import ContactList from "../ContactList/";
import Filter from "../Filter";
import requestPhonebook from "../../../services/fetchPhonebook";
import {useQuery} from 'react-query'


export default function Phonebook () {
   const [contacts,setContacts] = useState([])
   const [filter,setFilter] = useState('');

   const {isLoading} = useQuery('getContacts', async () => {
      console.log('fetch')
      const dat = await requestPhonebook('http://localhost:4200/api/contacts')
      setContacts(dat)
      }
   );
   console.log(isLoading)

   const addContactsHandler = async (nameCont, number) => {
      const newUser = {
         name: nameCont,
         number: Number(number),
      };    

      const bool = contacts.some(({ name }) => name === nameCont)
      if (bool) {
         window.alert("Such contact already exists")
      } else {
         const resp = await requestPhonebook('http://localhost:4200/api/contacts', 'POST', newUser);
         setContacts(resp);
      };
   };

   const handlerDelete = async (contactId) => {
      const answer = window.confirm(`You really want to delete this contact?`);
      answer && 
      setContacts( await requestPhonebook(`http://localhost:4200/api/contacts/${contactId}`, 'DELETE'));
         
   };

   const filterHandler = (filterVal) => {
      setFilter(filterVal);
   };

   const visibleContacts = () => {
      return contacts.filter((contact) => {
         return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
   };
   const visibleContact = visibleContacts();


   return(
      <>
      {isLoading && <p>Loading</p>}
      <div>
         <h2>Phonebook</h2>
         <ContactForm addContacts={addContactsHandler} />

         <h2>Contacts</h2>
         <Filter
            contacts={contacts}
            value={filter}
            filterHandler={filterHandler}
         />
         <ContactList
            contacts={visibleContact}
            handlerDelete={handlerDelete}
         />
      </div>
      </>
      
   )
}