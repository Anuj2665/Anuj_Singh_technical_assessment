// draggableNode.js
   
   export const DraggableNode = ({ type, label, icon }) => {
       const onDragStart = (event, nodeType) => {
           const appData = { nodeType }
           event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
           event.dataTransfer.effectAllowed = 'move';
       };
   
       return (
           <div
               onDragStart={(event) => onDragStart(event, type)}
               draggable
               style={{
                   cursor: 'grab',
                   minWidth: '64px',
                   padding: '10px 12px',
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   justifyContent: 'center',
                   gap: '6px',
                   borderRadius: 'var(--radius-md)',
                   background: 'var(--bg-secondary)',
                   border: '1px solid var(--border-light)',
                   boxShadow: 'var(--shadow-sm)',
                   transition: 'all 0.15s ease',
                   userSelect: 'none',
                   WebkitUserSelect: 'none',
               }}
               onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = 'var(--accent-primary)';
                   e.currentTarget.style.background = 'var(--accent-light)';
                   e.currentTarget.style.transform = 'translateY(-2px)';
                   e.currentTarget.style.boxShadow = 'var(--shadow-md)';
               }}
               onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = 'var(--border-light)';
                   e.currentTarget.style.background = 'var(--bg-secondary)';
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
               }}
               onMouseDown={(e) => {
                   e.currentTarget.style.cursor = 'grabbing';
               }}
               onMouseUp={(e) => {
                   e.currentTarget.style.cursor = 'grab';
               }}
           >
               {icon && (
                   <span style={{
                       fontSize: '20px',
                       lineHeight: '1',
                       filter: 'grayscale(20%)',
                   }}>
                       {icon}
                   </span>
               )}
               <span style={{
                   color: 'var(--text-primary)',
                   fontSize: '11px',
                   fontWeight: 500,
                   letterSpacing: '0.3px',
                   whiteSpace: 'nowrap',
               }}>
                   {label}
               </span>
           </div>
       );
   };