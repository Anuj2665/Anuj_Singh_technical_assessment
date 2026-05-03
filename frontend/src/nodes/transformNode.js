// transformNode.js

import { BaseNode } from './baseNode';
import { SimpleTextField } from '../fields';

export const TransformNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="Transform"
            leftHandles={[{ id: 'input' }]}
            rightHandles={[{ id: 'output' }]}
        >
            <SimpleTextField text="🔧 Data Transform" />
        </BaseNode>
    );
};