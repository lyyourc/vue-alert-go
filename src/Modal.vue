<template>
  <div class="modal-container">
    <div class="modal-wrapper">
      <header class="modal-header">
          <h3 class="modal-title"> {{ title }} </h3>
          <a href="#" class="modal-close" @click="destroyModal"> &times; </a>
      </header>

      <div class="modal-content"> {{ msg }} </div>

      <footer class="modal-footer">
        <a href="#" class="modal-btn modal-yes-btn"> {{ yesText }}</a>
        <a href="#" class="modal-btn modal-no-btn"> {{ noText }}</a>
      </footer>
    </div>
    <div class="modal-mask" @click="destroyModal"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yesText: 'OK',
      noText: 'NO',
    }
  },

  methods: {
    destroyModal() {
      this.$el.remove()
    },

    onClickCloseNoBtn() {
      this.destroyModal()
    },
  },
}  
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* design draft */
  background:rgba(0,0,0,0.30);
  font-family: MicrosoftYaHei;
  z-index: 9998;
}

.modal-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 9999;

  /* design draft */
  background:#fff;
  box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.40);
  border-radius: 2px;

  min-width: 300px;
  padding: 0 20px;
}

.modal-header {
  /* design draft */
  border-bottom: 1px solid #ddd;
  padding: 20px 0 10px 0;

  display: flex;
  justify-content: space-between;
}

.modal-title {
  /* design draft */
  font-size: 18px;
  color: #656b79;
  line-height: 20px;

  margin: 0;
}
.modal-close {
  /* design draft */
  font-size: 24px;
  color: #999999;

  text-decoration: none;
  position: absolute;
  top: 5px;
  right: 13px;
}

.modal-content {
  /* design draft */
  font-size: 16px;
  color: #313742;
  line-height: 16px;

  padding: 20px 14px;
}

.modal-footer {
  padding: 0 14px 24px 14px;
}

.modal-btn {
  display: inline-block;
  text-decoration: none;
  padding: 10px 30px;
  border-radius:2px;
  color: #fff;
  font-size: 14px;
}
.modal-yes-btn {
  background: #2bb56f;
  margin-right: 10px;
}
.modal-no-btn {
  background: #999da7
}
</style>