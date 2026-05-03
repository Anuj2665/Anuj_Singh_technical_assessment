// mathNode.js

import { BaseNode } from './baseNode';

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
            <div>
                <span>➗ Math Operation</span>
            </div>
        </BaseNode>
    );
};