import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

const originalConsoleError = console.error;

console.error = (...args) => {
  const message = args[0];
  
  const ignoredMessages = [
    'findDOMNode',
    'AnimatePresence',
    'useLayoutEffect',
    'flushSync',
    'unstable_flushDiscreteUpdates'
  ];
  
  if (typeof message === 'string' && 
      ignoredMessages.some(ignored => message.includes(ignored))) {
    return;
  }
  
  originalConsoleError.apply(console, args);
};

root.render(<App />);

setTimeout(() => {
  console.error = originalConsoleError;
}, 2000);