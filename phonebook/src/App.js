import './App.css';
import Phonebook from './components/PhoneComponent/Phonebook';
import {QueryClient,QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Phonebook/>
    </QueryClientProvider>
  );
}

export default App;
