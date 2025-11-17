import React, { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const ChatWidget = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        createChat({
          webhookUrl: 'https://ahmadkhan526401.app.n8n.cloud/webhook/e104e40e-6134-4825-a6f0-8a646d882662/chat',
          webhookConfig: {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          },
          target: '#n8n-chat-root',
          mode: 'window',
          chatInputKey: 'n8n_chat_input',
          chatSessionKey: 'n8n_chat_session_id',
          loadPreviousSession: true,
          metadata: {},
          showWelcomeScreen: true,
          defaultLanguage: 'en',
          initialMessages: [
            'Hi there! 👋',
            'My name is Ahmad. How can I assist you today?',
          ],
          i18n: {
            en: {
              title: 'Hi there! 👋',
              subtitle: "Start a chat. We're here to help you 24/7.",
              footer: '',
              getStarted: 'New Conversation',
              inputPlaceholder: 'Type your question...',
            },
          },
          enableStreaming: false,
        });
      } catch (error) {
        console.error('Chat initialization failed:', error);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return <div id="n8n-chat-root" className="fixed bottom-4 right-4 z-50" />;
};

export default ChatWidget;