import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {
       const { chats, activeChat, userName, messages } = props;

       const chat = chats && chats[activeChat];

       RenderMessages = () => {
           const keys = Object.keys(messages);

           return keys.map((key, index) => {
               const message = messages[key];
               const LastMessageKey = index == 0 ? null : keys[index -1];
               const isMyMessage = userName === message.sender.username;
           })
       }

        return ( 
            <div>
                ChatFeed
            </div>
        );
};

export default ChatFeed;