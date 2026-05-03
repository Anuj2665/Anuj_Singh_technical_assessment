// textNode.js

import { useState, useEffect } from 'react';
import { useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './baseNode';
import { TextAreaField } from '../fields';

export const TextNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');
    const [leftHandles, setLeftHandles] = useState([]);
    
    // Hook to notify ReactFlow when handles change
    const updateNodeInternals = useUpdateNodeInternals();

    const handleTextChange = (e) => {
        setCurrText(e.target.value);
    };

    // Dynamic handles extraction effect
    useEffect(() => {
        // Simple regex to match anything between {{ and }}
        const regex = /\{\{(.*?)\}\}/g;
        const matches = [];
        let match;
        
        while ((match = regex.exec(currText)) !== null) {
            // Trim whitespace from variable name
            const varName = match[1].trim();
            // Only add non-empty names
            if (varName && varName.length > 0) {
                matches.push(varName);
            }
        }
        
        // Get unique variable names
        const uniqueVars = [...new Set(matches)];
        
        // Map to handle objects
        const newHandles = uniqueVars.map(varName => ({
            id: varName
        }));
        
        setLeftHandles(newHandles);
    }, [currText]);

    // Notify ReactFlow when handles change - CRITICAL for dynamic handles
    useEffect(() => {
        updateNodeInternals(id);
    }, [leftHandles, id, updateNodeInternals]);

    return (
        <BaseNode
            id={id}
            title="Text"
            leftHandles={leftHandles}
            rightHandles={[{ id: 'output' }]}
        >
            <TextAreaField
                value={currText}
                onChange={handleTextChange}
                placeholder="Enter text with {{variables}}"
            />
        </BaseNode>
    );
};