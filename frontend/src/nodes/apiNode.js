// apiNode.js

import { BaseNode } from './baseNode';

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
            <div>
                <span>🌐 HTTP API Call</span>
            </div>
        </BaseNode>
    );
};