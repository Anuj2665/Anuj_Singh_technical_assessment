// apiNode.js

import { BaseNode } from './baseNode';
import { SimpleTextField } from '../fields';

export const APINode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="API"
            leftHandles={[{ id: 'request' }]}
            rightHandles={[
                { id: 'response' },
                { id: 'error' }
            ]}
        >
            <SimpleTextField text="🌐 HTTP API Call" />
        </BaseNode>
    );
};