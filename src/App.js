import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';

import './App.css';

const App = () => {
    return ( 
        <ChatEngine 
            height='100vh'
            projectID="20058288-fea0-46b2-bb43-80f48c4e52c5"
            userName="YahyaT99"
            userSecret="smartprogrammer"
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    );
};

export default App;