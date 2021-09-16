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
            draggableElement.childNodes[1].setAttribute('onclick', `this.parentNode.remove();`);
        }

        e.dataTransfer.clearData();
    }

    return (
        <>
            {/* <section class="content"></section> */}
            
            <p className="drag-heading">
                DOUBLE CLICK THE INTEGER BOX TO CHANGE THE VALUE
                <br />
                <hr />
                DRAG ITEMS HERE
            </p>
            <section id="drop-panel" className="drop-panel" onDragOver={e => e.preventDefault()} onDrop={dropElement}>
            
            </section>
        </>
    )
}

export default DropPanel
