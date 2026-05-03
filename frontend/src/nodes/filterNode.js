// filterNode.js

import { BaseNode } from './baseNode';

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
            <div>
                <span>🔍 Conditional Filter</span>
            </div>
        </BaseNode>
    );
};