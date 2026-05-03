// filterNode.js

import { BaseNode } from './baseNode';
import { SimpleTextField } from '../fields';

export const FilterNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="Filter"
            leftHandles={[{ id: 'input' }]}
            rightHandles={[
                { id: 'pass' },
                { id: 'fail' }
            ]}
        >
            <SimpleTextField text="🔍 Conditional Filter" />
        </BaseNode>
    );
};