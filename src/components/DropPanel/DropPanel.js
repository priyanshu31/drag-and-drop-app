import React from 'react'
import './DropPanel.scss'

const DropPanel = () => {

    const dropElement = e => {

        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = e.target;
        console.log(dropzone)
        if(draggableElement)
            dropzone.appendChild(draggableElement);
        e.dataTransfer.clearData();
    }

    return (
        <>
            {/* <section class="content"></section> */}
            
            <p className="drag-heading">DRAG ITEMS HERE</p>
            <section id="drop-panel" className="drop-panel" onDragOver={e => e.preventDefault()} onDrop={dropElement}>
            
            </section>
        </>
    )
}

export default DropPanel
