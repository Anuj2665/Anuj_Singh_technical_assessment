// outputNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';
import { TextInputField, DropdownField } from '../fields';

export const OutputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
    const [outputType, setOutputType] = useState(data.outputType || 'Text');

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleTypeChange = (e) => {
        setOutputType(e.target.value);
    };

    const typeOptions = [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'Image' },
    ];

    return (
        <BaseNode
            id={id}
            title="Output"
            leftHandles={[{ id: 'value' }]}
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
                    value={outputType}
                    options={typeOptions}
                    onChange={handleTypeChange}
                />
            </div>
        </BaseNode>
    );
};