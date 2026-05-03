// transformNode.js

import { BaseNode } from './baseNode';

export const TransformNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="Transform"
            leftHandles={[{ id: 'input' }]}
            rightHandles={[{ id: 'output' }]}
        >
            <div>
                <span>🔧 Data Transform</span>
            </div>
        </BaseNode>
    );
};