<template>
  <div id="myModal" class="modal fade show fixed-left" style="display: block;" tabindex="-1">
    <div class="modal-dialog modal-dialog-aside" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            <slot name="modal-header"></slot>
          </h4>
          <button aria-label="Close" class="close" data-dismiss="modal" type="button" @click="$emit('close')">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="modal-text"></slot>
        </div>
        <div class="modal-footer">
          <slot name="modal-footer"></slot>
          <button class="btn btn-outline-dark" data-dismiss="modal" type="button" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Modal"
}
</script>

<style scoped>
div.modal-content{
  background-color: #f9f8fa;
  box-shadow: 5px 20px 15px 10px rgba(50,50,50, .3);
}

div.modal-header{
  border-bottom: 1px solid #9e6fd1;
}
div.modal-footer {
  border-top: 1px solid #9e6fd1;
}

.modal .modal-dialog-aside {
  width: 650px;
  max-width: 90%;
  height: 100%;
  margin: 0;
  transform: translate(0);
  transition: transform .2s;
}

.modal .modal-dialog-aside .modal-content {
  height: inherit;
  border: 0;
  border-radius: 0;
}

.modal .modal-dialog-aside .modal-content .modal-body {
  overflow-y: auto
}

.modal.fixed-left .modal-dialog-aside {
  margin-left: auto;
  transform: translateX(100%);
}

.modal.fixed-right .modal-dialog-aside {
  margin-right: auto;
  transform: translateX(-100%);
}

.modal.show .modal-dialog-aside {
  transform: translateX(0);
}



</style>
