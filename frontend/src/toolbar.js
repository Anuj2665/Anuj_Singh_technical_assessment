// toolbar.js
   
   import { DraggableNode } from './draggableNode';
   
   export const PipelineToolbar = () => {
       return (
           <div style={{
               position: 'fixed',
               top: '16px',
               left: '50%',
               transform: 'translateX(-50%)',
               zIndex: 1000,
               background: 'var(--bg-toolbar)',
               backdropFilter: 'blur(12px)',
               borderRadius: 'var(--radius-xl)',
               padding: '12px 20px',
               border: '1px solid var(--border-light)',
               boxShadow: 'var(--shadow-lg)',
           }}>
               <div style={{
                   display: 'flex',
                   flexWrap: 'nowrap',
                   gap: '10px',
                   alignItems: 'center',
               }}>
                   <DraggableNode type='customInput' label='Input' icon='📥' />
                   <DraggableNode type='llm' label='LLM' icon='🤖' />
                   <DraggableNode type='customOutput' label='Output' icon='📤' />
                   <DraggableNode type='text' label='Text' icon='📝' />
                   <div style={{
                       width: '1px',
                       height: '28px',
                       background: 'var(--border-medium)',
                       margin: '0 4px',
                   }} />
                   <DraggableNode type='database' label='Database' icon='🗄️' />
                   <DraggableNode type='math' label='Math' icon='🔢' />
                   <DraggableNode type='api' label='API' icon='🌐' />
                   <DraggableNode type='transform' label='Transform' icon='⚡' />
                   <DraggableNode type='filter' label='Filter' icon='🔍' />
               </div>
           </div>
       );
   };