// baseNode.js
   
   import { Handle, Position } from 'reactflow';
   
   export const BaseNode = ({ id, title, children, leftHandles = [], rightHandles = [] }) => {
       // Calculate vertical positions for handles
       const getHandleStyle = (index, total) => ({
           top: `${((index + 1) * 100) / (total + 1)}%`,
           background: 'var(--accent-primary)',
           border: '2px solid var(--bg-secondary)',
           width: '10px',
           height: '10px',
           borderRadius: '50%',
       });
   
       return (
           <div style={{
               minWidth: '220px',
               minHeight: '80px',
               background: 'var(--bg-secondary)',
               borderRadius: 'var(--radius-md)',
               position: 'relative',
               boxShadow: 'var(--shadow-md)',
               border: '1px solid var(--border-light)',
               overflow: 'hidden',
               transition: 'box-shadow 0.2s ease',
           }}>
               {/* Left Handles */}
               {leftHandles.map((handle, index) => (
                   <Handle
                       key={handle.id}
                       type="target"
                       position={Position.Left}
                       id={`${id}-${handle.id}`}
                       style={getHandleStyle(index, leftHandles.length)}
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
               }}>
                   <div style={{
                       width: '6px',
                       height: '6px',
                       borderRadius: '50%',
                       background: 'var(--accent-primary)',
                   }} />
                   <span>{title}</span>
               </div>
   
               {/* Content */}
               <div style={{
                   padding: '14px',
                   color: 'var(--text-secondary)',
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
                       style={getHandleStyle(index, rightHandles.length)}
                   />
               ))}
           </div>
       );
   };