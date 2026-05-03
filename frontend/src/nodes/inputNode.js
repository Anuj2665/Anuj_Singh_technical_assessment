// inputNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
    const [inputType, setInputType] = useState(data.inputType || 'Text');

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };

    return (
        <BaseNode
            id={id}
            title="Input"
            rightHandles={[{ id: 'value' }]}
        >
            <div>
                <label style={{ display: 'block', marginBottom: '5px' }}>
                    Name:
                    <input
                        type="text"
                        value={currName}
                        onChange={handleNameChange}
                        style={{ marginLeft: '5px' }}
                    />
                </label>
                <label style={{ display: 'block' }}>
                    Type:
                    <select value={inputType} onChange={handleTypeChange} style={{ marginLeft: '5px' }}>
                        <option value="Text">Text</option>
                        <option value="File">File</option>
                    </select>
                </label>
            </div>
        </BaseNode>
    );
};