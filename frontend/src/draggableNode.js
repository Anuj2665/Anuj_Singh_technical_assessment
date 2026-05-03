// draggableNode.js

export const DraggableNode = ({ type, label, icon = '📦' }) => {
    const onDragStart = (event, nodeType) => {
        const appData = { nodeType }
        event.target.style.cursor = 'grabbing';
        event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div
            className={type}
            onDragStart={(event) => onDragStart(event, type)}
            onDragEnd={(event) => (event.target.style.cursor = 'grab')}
            style={{
                cursor: 'grab',
                minWidth: '72px',
                height: '72px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '12px',
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '6px',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: '8px',
                userSelect: 'none',
                WebkitUserSelect: 'none',
            }}
            draggable
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.6)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
            }}
        >
            <span style={{
                fontSize: '24px',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
            }}>
                {icon}
            </span>
            <span style={{
                color: '#e2e8f0',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
            }}>
                {label}
            </span>
        </div>
    );
};