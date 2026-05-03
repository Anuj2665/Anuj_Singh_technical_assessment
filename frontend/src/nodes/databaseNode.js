// databaseNode.js

import { BaseNode } from './baseNode';
import { SimpleTextField } from '../fields';

export const DatabaseNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="Database"
            leftHandles={[{ id: 'input' }]}
            rightHandles={[{ id: 'output' }]}
        >
            <SimpleTextField text="🗄️ Database Connection" />
        </BaseNode>
    );
};