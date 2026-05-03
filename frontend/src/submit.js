// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nodes: nodes,
                    edges: edges,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            alert(
                `Pipeline Analysis:\n\n` +
                `Number of Nodes: ${data.num_nodes}\n` +
                `Number of Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert(`Error: Failed to submit pipeline.\n${error.message}`);
        }
    };

    return (
        <div style={{ 
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
        }}>
            <button 
                type="button" 
                onClick={handleSubmit}
                style={{
                    padding: '16px 32px',
                    fontSize: '15px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #7c3aed 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50px',
                    boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset';
                }}
                onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px) scale(0.98)';
                }}
                onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                }}
            >
                <span style={{ fontSize: '20px' }}>🚀</span>
                <span>Submit Pipeline</span>
            </button>
        </div>
    );
};