// baseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, children, leftHandles = [], rightHandles = [] }) => {
    // Calculate vertical positions for left handles
    const getLeftHandleStyle = (index, total) => ({
        top: `${((index + 1) * 100) / (total + 1)}%`,
        background: '#6366f1',
        border: '2px solid #4f46e5',
        width: '12px',
        height: '12px',
        boxShadow: '0 0 8px rgba(99, 102, 241, 0.6)',
    });

    // Calculate vertical positions for right handles
    const getRightHandleStyle = (index, total) => ({
        top: `${((index + 1) * 100) / (total + 1)}%`,
        background: '#6366f1',
        border: '2px solid #4f46e5',
        width: '12px',
        height: '12px',
        boxShadow: '0 0 8px rgba(99, 102, 241, 0.6)',
    });

    return (
        <div style={{
            minWidth: 220,
            minHeight: 90,
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: '12px',
            position: 'relative',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
            {/* Left Handles */}
            {leftHandles.map((handle, index) => (
                <Handle
                    key={handle.id}
                    type="target"
                    position={Position.Left}
                    id={`${id}-${handle.id}`}
                    style={getLeftHandleStyle(index, leftHandles.length)}
                />
            ))}

            {/* Header */}
            <div style={{
                padding: '12px 16px',
                background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
            }}>
                <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#22d3ee',
                    boxShadow: '0 0 8px #22d3ee',
                }} />
                <span>{title}</span>
            </div>

            {/* Content */}
            <div style={{
                padding: '16px',
                color: '#334155',
                fontSize: '13px',
                lineHeight: '1.5',
            }}>
                {children}
            </div>

            {/* Right Handles */}
            {rightHandles.map((handle, index) => (
                <Handle
                    key={handle.id}
                    type="source"
                    position={Position.Right}
                    id={`${id}-${handle.id}`}
                    style={getRightHandleStyle(index, rightHandles.length)}
                />
            ))}
        </div>
    );
};