// mathNode.js

import { BaseNode } from './baseNode';
import { SimpleTextField } from '../fields';

export const MathNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="Math"
            leftHandles={[
                { id: 'a' },
                { id: 'b' }
            ]}
            rightHandles={[{ id: 'result' }]}
        >
            <SimpleTextField text="➗ Math Operation" />
        </BaseNode>
    );
};