const express = require('express');
const mongoose = require('mongoose');
const Phonebook = require('./phonebookSchema');
const cors = require('cors');
import { URL } from './keys';

const app = express();

const PORT = 4200;

async function connecting () {
   try {
      await mongoose.connect(URL)    
   } catch (err) {
      throw new Error(err.message);
   }
}
connecting();

app.use(cors());
//for parcing data in .json
app.use(express.json());

app.get('/api/contacts',async (req,res) => {
   const list = await Phonebook.find();
   res.json(list);
});

app.post('/api/contacts', async(req,res) => {
   const item = new Phonebook(req.body);
   await item.save();
   const list = await Phonebook.find();
   res.status(201).json(list);
})

app.delete('/api/contacts/:id', async (req,res) => {
   await Phonebook.findByIdAndRemove(req.params.id);
   const list = await Phonebook.find();
   res.status(200).json(list);
})

app.get('/',(req,res) => {
   res.send('Hello it is phonebook home page');
})

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))