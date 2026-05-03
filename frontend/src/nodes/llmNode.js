// llmNode.js

import { BaseNode } from './baseNode';
import { SimpleTextField } from '../fields';

export const LLMNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="LLM"
            leftHandles={[
                { id: 'system' },
                { id: 'prompt' }
            ]}
            rightHandles={[{ id: 'response' }]}
        >
            <SimpleTextField text="This is a LLM." />
        </BaseNode>
    );
};