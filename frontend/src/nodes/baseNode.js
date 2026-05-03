// baseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, children, leftHandles = [], rightHandles = [] }) => {
    const HEADER_HEIGHT = 38;
    const NODE_MIN_HEIGHT = 80;

    // Calculate handle positions evenly distributed in the content area
    const getHandleStyle = (index, total, side) => {
        if (total === 0) return {};
        
        // Content area starts after header (approx 32% of node)
        const contentStartPercent = 32;
        const contentEndPercent = 90;
        const contentHeight = contentEndPercent - contentStartPercent;
        
        // Calculate even spacing
        const step = contentHeight / (total + 1);
        const top = contentStartPercent + (step * (index + 1));
        
        return {
            top: `${top}%`,
            background: 'var(--accent-primary)',
            border: '2px solid var(--bg-secondary)',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
        };
    };

    return (
        <div style={{
            minWidth: '220px',
            minHeight: `${NODE_MIN_HEIGHT}px`,
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            position: 'relative',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-light)',
            overflow: 'visible',
            transition: 'box-shadow 0.2s ease',
        }}>
            {/* Left Handles - evenly distributed */}
            {leftHandles.map((handle, index) => (
                <Handle
                    key={handle.id}
                    type="target"
                    position={Position.Left}
                    id={`${id}-${handle.id}`}
                    style={getHandleStyle(index, leftHandles.length, 'left')}
                />
            ))}

            {/* Header */}
            <div style={{
                padding: '10px 14px',
                background: 'var(--bg-primary)',
                borderBottom: '1px solid var(--border-light)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                height: `${HEADER_HEIGHT}px`,
                boxSizing: 'border-box',
                borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
            }}>
                <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent-primary)',
                }} />
                <span>{title}</span>
            </div>

            {/* Content - Non-draggable area */}
            <div 
                className="nodrag"
                style={{
                    padding: '14px',
                    color: 'var(--text-secondary)',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    minHeight: '42px',
                    cursor: 'default',
                }}
            >
                {children}
            </div>

            {/* Right Handles - evenly distributed */}
            {rightHandles.map((handle, index) => (
                <Handle
                    key={handle.id}
                    type="source"
                    position={Position.Right}
                    id={`${id}-${handle.id}`}
                    style={getHandleStyle(index, rightHandles.length, 'right')}
                />
            ))}
        </div>
    );
};