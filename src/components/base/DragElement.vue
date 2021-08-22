<template>
    <div class="drag-container" @mousedown="dragMouseDown" ref="draggableContainer">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "DragElement",
    data() {
        return {
            positions: {
                clientX: undefined,
                clientY: undefined,
                movementX: 0,
                movementY: 0
            }
        }
    },
    methods: {
        /**
         * Sự kiện kéo chuột
         * author: nlanh 20/8/2021
         */
        dragMouseDown(event) {
            // event.preventDefault();
            // get the mouse cursor position at startup:
            this.positions.clientX = event.clientX;
            this.positions.clientY = event.clientY;
            document.onmousemove = this.elementDrag;
            document.onmouseup = this.closeDragElement;
        },
        /**
         * Hàm xử lý khi kéo chuột, tính toán lại position
         * author: nlanh 20/8/2021
         */
        elementDrag(event) {
            event.preventDefault()
            this.positions.movementX = this.positions.clientX - event.clientX
            this.positions.movementY = this.positions.clientY - event.clientY
            this.positions.clientX = event.clientX
            this.positions.clientY = event.clientY
            // set the element's new position:
            this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
            this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
        },
        /**
         * Sự kiện khi thả chuột
         */
        closeDragElement() {
            document.onmouseup = null
            document.onmousemove = null
        }
    },
}
</script>
<style>
    .drag-container {
        position: absolute;
        cursor: grab;
    }
</style>