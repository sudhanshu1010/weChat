import React from 'react'
import Login from './Login.js'
import useLocalStorage from '../hooks/useCustomStorage.js';
import Dashboard from './Dashboard.js';
import { ContactsProvider } from '../context/ContactsProvider.js';
import { ConversationsProvider } from '../context/ConversationsProvider.js';
import { SocketProvider } from '../context/SocketProvider.js';

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  
  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
}

export default App;
