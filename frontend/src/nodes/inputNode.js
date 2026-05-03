// inputNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';
import { TextInputField, DropdownField } from '../fields';

export const InputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
    const [inputType, setInputType] = useState(data.inputType || 'Text');

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };

    const typeOptions = [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'File' },
    ];

    return (
        <BaseNode
            id={id}
            title="Input"
            rightHandles={[{ id: 'value' }]}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            }}>
                <TextInputField
                    label="Name:"
                    value={currName}
                    onChange={handleNameChange}
                />
                <DropdownField
                    label="Type:"
                    value={inputType}
                    options={typeOptions}
                    onChange={handleTypeChange}
                />
            </div>
        </BaseNode>
    );
};