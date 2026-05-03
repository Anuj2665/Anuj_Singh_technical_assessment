// baseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, children, leftHandles = [], rightHandles = [] }) => {
    // Calculate vertical positions for left handles
    const getLeftHandleStyle = (index, total) => ({
        top: `${((index + 1) * 100) / (total + 1)}%`,
    });

    // Calculate vertical positions for right handles
    const getRightHandleStyle = (index, total) => ({
        top: `${((index + 1) * 100) / (total + 1)}%`,
    });

    return (
        <div style={{
            width: 200,
            minHeight: 80,
            border: '1px solid black',
            backgroundColor: 'white',
            borderRadius: '4px',
            position: 'relative'
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

            {/* Title */}
            <div style={{
                borderBottom: '1px solid #ddd',
                padding: '8px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px 4px 0 0',
                fontWeight: 'bold'
            }}>
                <span>{title}</span>
            </div>

            {/* Content */}
            <div style={{ padding: '10px' }}>
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