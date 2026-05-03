// simpleTextField.js

export const SimpleTextField = ({ text, style = {} }) => {
    return (
        <span style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            ...style,
        }}>
            {text}
        </span>
    );
};