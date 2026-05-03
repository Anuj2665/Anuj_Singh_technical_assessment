// databaseNode.js

import { BaseNode } from './baseNode';

export const DatabaseNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="Database"
            leftHandles={[{ id: 'input' }]}
            rightHandles={[{ id: 'output' }]}
        >
            <div>
                <span>🗄️ Database Connection</span>
            </div>
        </BaseNode>
    );
};