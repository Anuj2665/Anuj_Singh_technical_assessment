// textNode.js

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');
    const [leftHandles, setLeftHandles] = useState([]);
    const textareaRef = useRef(null);
    const hiddenSpanRef = useRef(null);

    // Handle text changes
    const handleTextChange = (e) => {
        setCurrText(e.target.value);
    };

    // Auto-resize effect
    useEffect(() => {
        if (textareaRef.current && hiddenSpanRef.current) {
            // Copy text to hidden span to measure dimensions
            hiddenSpanRef.current.textContent = currText || ' ';
            // Add some padding for comfort
            const newWidth = Math.max(150, Math.min(400, hiddenSpanRef.current.offsetWidth + 20));
            const newHeight = Math.max(40, Math.min(200, hiddenSpanRef.current.offsetHeight + 10));
            
            textareaRef.current.style.width = `${newWidth}px`;
            textareaRef.current.style.height = `${newHeight}px`;
        }
    }, [currText]);

    // Dynamic handles extraction effect
    useEffect(() => {
        // Regex to match {{variableName}} pattern
        // Matches valid JavaScript variable names (letters, numbers, underscore, $; can't start with number)
        const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
        const matches = [];
        let match;
        
        while ((match = regex.exec(currText)) !== null) {
            matches.push(match[1]); // match[1] contains the captured group (variable name)
        }
        
        // Get unique variable names
        const uniqueVars = [...new Set(matches)];
        
        // Map to handle objects
        const newHandles = uniqueVars.map(varName => ({
            id: varName
        }));
        
        setLeftHandles(newHandles);
    }, [currText]);

    return (
        <BaseNode
            id={id}
            title="Text"
            leftHandles={leftHandles}
            rightHandles={[{ id: 'output' }]}
        >
            <div style={{ position: 'relative' }}>
                {/* Hidden span for measuring text dimensions */}
                <span
                    ref={hiddenSpanRef}
                    style={{
                        position: 'absolute',
                        visibility: 'hidden',
                        whiteSpace: 'pre-wrap',
                        wordWrap: 'break-word',
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        lineHeight: 'inherit',
                        padding: '4px',
                        maxWidth: '380px'
                    }}
                />
                <textarea
                    ref={textareaRef}
                    value={currText}
                    onChange={handleTextChange}
                    placeholder="Enter text with {{variables}}"
                    style={{
                        minWidth: '150px',
                        minHeight: '40px',
                        maxWidth: '400px',
                        maxHeight: '200px',
                        resize: 'none',
                        overflow: 'hidden',
                        fontFamily: 'inherit',
                        fontSize: '14px',
                        padding: '4px',
                        border: '1px solid #ccc',
                        borderRadius: '3px'
                    }}
                />
            </div>
        </BaseNode>
    );
};