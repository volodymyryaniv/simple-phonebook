export default function Filter({ contacts, value, filterHandler }) {
   return (
      <>
         {contacts.length >= 2 && (
            <label>Find contact by name
               <input
               type="text"
               value={value}
               onChange={(e) => filterHandler(e.target.value)}
            /> 
            </label>
            
         )}
      </>
   );
}
