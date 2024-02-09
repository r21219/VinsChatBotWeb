import React, { useState } from 'react';
import ApiClient from '../service/ApiClient';

const ChatWindow: React.FC = () => {
    const [userMessage, setUserMessage] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<{ message: string; from: 'user' | 'bot' }[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const assistantMessage = await ApiClient.sendMessage(userMessage);
            setChatHistory(prevHistory => [
                ...prevHistory,
                { message: userMessage, from: 'user' },
                { message: assistantMessage, from: 'bot' }
            ]);
        } catch (error) {
            console.error('Error sending message:', error);
        }

        setUserMessage('');
    };

    return (
        <div className="card" style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
            <div className="card-header">Chat with Bot</div>
            <div className="card-body">
                {chatHistory.map((messageObj, index) => (
                    <div key={index} style={{ textAlign: messageObj.from === 'user' ? 'right' : 'left' }}>
                        {messageObj.from === 'user' ? 'You:' : ''} {messageObj.message}
                    </div>
                ))}
            </div>
            <div className="card-footer">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Type your message here..." value={userMessage} onChange={handleChange} />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatWindow;