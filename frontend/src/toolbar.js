// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            background: 'rgba(30, 41, 59, 0.85)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            padding: '12px 24px',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: '12px',
                alignItems: 'center',
            }}>
                <DraggableNode type='customInput' label='Input' icon='📥' />
                <DraggableNode type='llm' label='LLM' icon='🤖' />
                <DraggableNode type='customOutput' label='Output' icon='📤' />
                <DraggableNode type='text' label='Text' icon='📝' />
                <div style={{
                    width: '1px',
                    height: '32px',
                    background: 'rgba(148, 163, 184, 0.3)',
                    margin: '0 4px',
                }} />
                <DraggableNode type='database' label='DB' icon='🗄️' />
                <DraggableNode type='math' label='Math' icon='➗' />
                <DraggableNode type='api' label='API' icon='🌐' />
                <DraggableNode type='transform' label='Trans' icon='🔧' />
                <DraggableNode type='filter' label='Filter' icon='🔍' />
            </div>
        </div>
    );
};