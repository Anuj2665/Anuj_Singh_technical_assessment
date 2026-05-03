// textareaField.js

export const TextAreaField = ({ value, onChange, placeholder = '', style = {} }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="nodrag nopan"
            style={{
                padding: '8px 12px',
                fontSize: '13px',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                outline: 'none',
                width: '100%',
                minHeight: '60px',
                resize: 'vertical',
                fontFamily: 'inherit',
                lineHeight: '1.5',
                ...style,
            }}
        />
    );
};
