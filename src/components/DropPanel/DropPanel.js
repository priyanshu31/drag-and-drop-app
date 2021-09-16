import React, { useEffect } from 'react'
import './DropPanel.scss'

const DropPanel = () => {

    const dropElement = e => {

        const id = e.dataTransfer.getData('text');
        let draggableElement = document.getElementById(id);
        const dropzone = e.target;
      
        if(draggableElement) {
            draggableElement = draggableElement.cloneNode(true);
            dropzone.appendChild(draggableElement);
            draggableElement.childNodes[1].style.display = 'flex';
        }

        e.dataTransfer.clearData();
    }

    useEffect(() => {

        const script = document.createElement("script");
        script.type = 'text/javascript';
        script.async = true;

        script.innerHTML = `
            console.log('Hello')

        `;

        document.body.appendChild(script);

    }, [])

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
