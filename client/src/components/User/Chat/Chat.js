import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Conversation from '../Conversation/Conversation';
import Message from '../Message/Message';
import './Chat.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import useAuthCounselor from '../../../hooks/useAuthCounselor';
import {io} from 'socket.io-client';

function Chat() {

    const user = useAuth();
    const counselor = useAuthCounselor();
    let jwtDecoded;
    let counselorDecoded;
    const counselorToken = counselor.auth.accessToken
    const token =  user.auth.accessToken
    let commonId;

    if(token){
       jwtDecoded = jwtDecode(token);
       commonId = jwtDecoded
       console.log('user');
       console.log(commonId);
    } 
    if(counselorToken) {
        console.log('counselor');
        counselorDecoded = jwtDecode(counselorToken);
        commonId = counselorDecoded;
        console.log(commonId);
    }
             
    const [conversation, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [arrivalmessage, setArrivalMessage] = useState("");
    const [newMessage, setNewMessage] = useState("");
    const scrollRef = useRef();
    const socket = useRef();

    useEffect(() => {  
       socket.current = io("ws://localhost:8900");
       socket.current.on("getMessage", data => {
        setArrivalMessage({
            sender: data.senderId,
            text: data.text,
            createdAt: Date.now()
        });
       });
    },[])

    useEffect(() => {
        arrivalmessage && 
        currentChat?.members.includes(arrivalmessage.sender) && 
        setMessages((prev) => [...prev, arrivalmessage]);

    },[arrivalmessage, currentChat])

    useEffect(() => {
        console.log('common id');
        console.log(commonId);
        socket.current.emit("addUser", commonId.userInfo.others._id);
        socket.current.on("getUsers", users =>{
            console.log('usersssss');
            console.log(users);
        })
    },[])

    useEffect(()=>{
        const getConversations = async () => {
            console.log('useEffect');
            try {
                    const res = await axios.get(`/conversation/chat/${commonId.userInfo.others._id}`);
                    console.log('conversations');
                    console.log(res);
                    setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getConversations();
    },[]);

    console.log(conversation);


    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`/message/message/${currentChat._id}`);
                console.log(res);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        } 
        getMessages();
    },[currentChat]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'});
    },[messages]);

    console.log('messages');
    console.log(messages);

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const message = {
            sender: commonId.userInfo.others._id,
            text: newMessage,
            conversationId: currentChat._id
        }

        const receiverId = currentChat.members.find(member => member !== commonId.userInfo.others._id)

        socket.current.emit("sendMessage", {
            senderId: commonId.userInfo.others._id,
            receiverId,
            text: newMessage
        })

        try {
            const res = await axios.post('/message/message', message);
            setMessages([...messages, res.data])
            setNewMessage("");
        } catch(err) {
            console.log(err)
        }
    }
  return (
    <React.Fragment>
        <div className='messenger'>
            <div className='chatMenu'>
                <div className='chatMenuWrapper'>
                    <input type="text" className='chatMenuInput' placeholder='Search for counselors'/>
                     { conversation&& 
                      conversation.map((c) => (
                        <div onClick={ () => setCurrentChat(c) }>
                            {
                                counselorDecoded ? <Conversation conversation={c} currentUser={commonId.userInfo.others._id} counselor='true'/>
                                : <Conversation conversation={c} currentUser={commonId.userInfo.others._id} />
                            }
                        </div>
                      ))
                     }
                </div>
            </div>
            <div className='chatBox'>
                <div className='chatBoxWrapper'>
                 {
                        currentChat?
                        <>
    
                    <div className="chatBoxTop">
                       {
                         messages.map((m) => (
                            <div ref={scrollRef}>
                                <Message messages={m} own={m.sender === commonId.userInfo.others._id}/>
                            </div>
                         ))
                       }
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className='chatMessageInput' 
                        placeholder='write something...'
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                        ></textarea>
                        <button className='submitButton' onClick={handleSubmit}>Send</button>
                    </div>
                    </> : <span className='noConversation'>Open a conversation to start chat</span>
                    
                }
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Chat