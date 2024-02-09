import React from 'react';
import DataSetUploader from '../component/DataSetUploader';
import ChatWindow from './ChatWindow';

const IndexPage: React.FC = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <h1>Chatbot Application</h1>
            <div style={{width: '80%', marginBottom: '20px'}}>
                <DataSetUploader/>
            </div>
            <div style={{width: '100%',height: '100%', flexGrow: 1}}>
                <ChatWindow/>
            </div>
        </div>
    );
};

export default IndexPage;
