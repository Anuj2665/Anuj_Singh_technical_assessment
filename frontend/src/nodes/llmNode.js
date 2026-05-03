// llmNode.js

import { BaseNode } from './baseNode';

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
            <div>
                <span>This is a LLM.</span>
            </div>
        </BaseNode>
    );
};