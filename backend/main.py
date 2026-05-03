from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict[str, Any]

class Edge(BaseModel):
    id: str = None
    source: str
    target: str
    type: str = None

class PipelineRequest(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineRequest):
    """
    Parse a pipeline and validate if it's a DAG (Directed Acyclic Graph).
    
    Returns:
        - num_nodes: Number of nodes in the pipeline
        - num_edges: Number of edges in the pipeline
        - is_dag: True if the graph has no cycles, False otherwise
    """
    nodes = pipeline.nodes
    edges = pipeline.edges
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # Build adjacency list and calculate in-degrees
    node_ids = {node.id for node in nodes}
    adjacency_list: Dict[str, List[str]] = {node_id: [] for node_id in node_ids}
    in_degree: Dict[str, int] = {node_id: 0 for node_id in node_ids}
    
    for edge in edges:
        source = edge.source
        target = edge.target
        
        # Only process edges where both nodes exist
        if source in node_ids and target in node_ids:
            adjacency_list[source].append(target)
            in_degree[target] += 1
    
    # Kahn's Algorithm for cycle detection (Topological Sort)
    # If we can process all nodes, it's a DAG
    queue = [node_id for node_id in node_ids if in_degree[node_id] == 0]
    processed_count = 0
    
    while queue:
        current = queue.pop(0)
        processed_count += 1
        
        for neighbor in adjacency_list[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # If we processed all nodes, there's no cycle (it's a DAG)
    is_dag = processed_count == num_nodes
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }