import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      height: '99vh',
      backgroundImage: 'url("https://png.pngtree.com/background/20230422/original/pngtree-abstract-blue-background-free-download-wallpaper-hd-vector-picture-image_2454990.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        padding: '20px',
        overflow: 'hidden', 
      }}>
        <textarea
          value={code}
          onChange={handleChange}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            fontFamily: 'monospace',
            fontSize: '16px',
            lineHeight: '1.5',
            border: 'none',
            outline: 'none',
            resize: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
            color: '#F8F8F2',
            padding: '10px', 
            overflowY: 'auto', 
          }}
        />
      </div>
      <div style={{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        padding: '20px',
        overflow: 'hidden', 
      }}>
        <SyntaxHighlighter 
          language="javascript" 
          style={darcula} 
          customStyle={{ 
            flex: 1, 
            height: '100%',
            margin: 0, 
            padding: '10px', 
            overflowY: 'auto', 
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeEditor;
