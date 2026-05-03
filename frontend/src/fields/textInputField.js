// textInputField.js

export const TextInputField = ({ label, value, onChange, placeholder = '', style = {} }) => {
    return (
        <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            ...style,
        }}>
            <span>{label}</span>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="nodrag nopan"
                style={{
                    padding: '4px 8px',
                    fontSize: '13px',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    flex: 1,
                    minWidth: '60px',
                }}
            />
        </label>
    );
};
