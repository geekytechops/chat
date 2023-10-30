import { Router , Routes , Route } from 'react-router-dom';
import Chatwindow from './Chatwindow';
import Chatwindow_bkp from './Chatwindow_bkp';
import Chats_page from './Chats_page';
import Login from './Login';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://192.168.0.145:9999';
export const socket = socketIOClient(ENDPOINT);

function App() {
  return (
    // <SocketContext.Provider value={socket}>
    <Routes>
    <Route path="/" element={ <Login /> } />  
    <Route path="/Chatwindow" element={ < Chatwindow/> } />        
    <Route path="/Chats_page" element={ < Chats_page/> } />
    <Route path="/Chatwindow_bkp" element={ < Chatwindow_bkp/> } />
    </Routes>
    // </SocketContext.Provider>    
  );
}

export default App;
