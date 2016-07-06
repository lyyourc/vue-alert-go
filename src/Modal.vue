<template>
  <div class="modal-container">
    <div class="modal-wrapper" :style="{ textAlign: align }">
      <!-- header start -->
      <header class="modal-header">
          <h3 class="modal-title" v-if="title"> {{ title }} </h3>
          <a href="#" class="modal-close" @click="destroyModal"> &times; </a>
      </header>
      <!-- header start -->


      <!-- main content start -->
      <div class="modal-content">
        <img alt="status icon" :src="icon" v-if="icon">
        <p> {{ msg }} </p>
      </div>
      <!-- main content end -->


      <!-- footer start -->
      <footer class="modal-footer" :style="{ justifyContent: align }">
        <a href="#" class="modal-btn modal-yes-btn"
          :style="{ flex: yesBtnFlex }"
          @click="onClickYesBtn"> 
          {{ yesBtnText }}
        </a>

        <a href="#" class="modal-btn modal-no-btn"
          v-if="needNoBtn"
          @click="onClickNoBtn">
          {{ noBtnText }}
        </a>
      </footer>
      <!-- footer end -->
    </div>

    <div class="modal-mask" @click="destroyModal"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yesBtnText: 'OK',
      noBtnText: 'NO',
      needNoBtn: false,
      align: 'left',
      autoCloseTimeout: 0,
    }
  },

  computed: {
    yesBtnFlex() {
      return this.needNoBtn ? 'none' : 1
    }
  },

  methods: {
    destroyModal() {
      this.$el.remove()
    },

    onClickCloseNoBtn() {
      this.destroyModal()
    },

    autoCloseModal() {
      if (this.autoCloseTimeout <= 0) return

      setTimeout(this.destroyModal, this.autoCloseTimeout)
    }
  },

  ready() {
    this.autoCloseModal()
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

  background:rgba(0,0,0,0.30);
  z-index: 9998;
}

.modal-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 9999;

  background:#fff;
  box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.40);
  border-radius: 2px;

  min-width: 300px;
  padding: 0 20px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.modal-title {
  font-size: 18px;
  color: #656b79;
  line-height: 20px;
  border-bottom: 1px solid #ddd;

  margin: 0;
  padding: 20px 0 10px 0;
  width: 100%;
}
.modal-close {
  font-size: 24px;
  color: #999999;

  text-decoration: none;
  position: absolute;
  top: 5px;
  right: 13px;
}

.modal-content {
  font-size: 16px;
  color: #313742;
  line-height: 16px;

  padding: 34px 14px 24px 14px;
}

.modal-footer {
  padding: 0 14px 24px 14px;
  display: flex;
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