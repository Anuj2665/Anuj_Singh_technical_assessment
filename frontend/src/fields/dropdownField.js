// dropdownField.js

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export const DropdownField = ({ label, value, options, onChange, style = {} }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
    const buttonRef = useRef(null);
    const selectedOption = options.find(opt => opt.value === value);

    // Prevent drag propagation to ReactFlow
    const handleMouseDown = (e) => {
        e.stopPropagation();
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        if (!isOpen) return;
        
        const handleClickOutside = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        
        const timer = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 10);
        
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + 4,
                left: rect.left,
                width: rect.width,
            });
        }
        
        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (optionValue) => {
        onChange({ target: { value: optionValue } });
        setIsOpen(false);
    };

    const dropdownMenu = isOpen ? (
        <div
            style={{
                position: 'fixed',
                top: dropdownPosition.top,
                left: dropdownPosition.left,
                width: dropdownPosition.width,
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-xl)',
                zIndex: 9999,
                overflow: 'hidden',
                animation: 'fadeIn 0.15s ease',
            }}
        >
            {options.map((option) => (
                <div
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    onMouseDown={(e) => e.stopPropagation()}
                    style={{
                        padding: '8px 12px',
                        fontSize: '13px',
                        color: option.value === value ? 'var(--accent-primary)' : 'var(--text-primary)',
                        background: option.value === value ? 'var(--accent-light)' : 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.1s ease',
                        whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                        if (option.value !== value) {
                            e.currentTarget.style.background = 'var(--bg-primary)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (option.value !== value) {
                            e.currentTarget.style.background = 'transparent';
                        }
                    }}
                >
                    {option.value === value ? (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                            <path 
                                d="M2.5 7L5.5 10L11.5 4" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <span style={{ width: '14px', flexShrink: 0 }} />
                    )}
                    <span>{option.label}</span>
                </div>
            ))}
        </div>
    ) : null;

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            position: 'relative',
            ...style,
        }}>
            <span>{label}</span>
            <div 
                ref={buttonRef}
                className="nodrag nopan"
                style={{ position: 'relative' }}
            >
                {/* Selected Value Display - Styled like text input but smaller */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        padding: '4px 8px',
                        fontSize: '13px',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '6px',
                        width: '180px',
                        boxSizing: 'border-box',
                        userSelect: 'none',
                        transition: 'all 0.15s ease',
                        ...(isOpen && {
                            borderColor: 'var(--accent-primary)',
                            boxShadow: '0 0 0 2px var(--accent-light)',
                        }),
                    }}
                >
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {selectedOption?.label || value}
                    </span>
                    <svg 
                        width="10" 
                        height="10" 
                        viewBox="0 0 10 10" 
                        fill="none"
                        style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.2s ease',
                            color: 'var(--text-muted)',
                            flexShrink: 0,
                        }}
                    >
                        <path 
                            d="M2 3.5L5 6.5L8 3.5" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {createPortal(dropdownMenu, document.body)}
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-4px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};