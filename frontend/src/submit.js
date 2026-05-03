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
                `Is DAG(Directed Acyclic Graph): ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert(`Error: Failed to submit pipeline.\n${error.message}`);
        }
    };

    return (
        <div 
            style={{ 
                position: 'fixed',
                right: '20px',
                bottom: '20px',
                zIndex: 1000,
                width: '160px',
            }}
        >
            <button 
                type="button" 
                onClick={handleSubmit}
                style={{
                    width: '100%',
                    padding: '10px 16px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 4px 14px 0 rgba(118, 75, 162, 0.39)',
                    transition: 'all 0.2s ease',
                    fontFamily: 'inherit',
                    letterSpacing: '0.3px',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(118, 75, 162, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(118, 75, 162, 0.39)';
                }}
                onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                Analyze Pipeline
            </button>
        </div>
    );
};