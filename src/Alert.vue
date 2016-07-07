<template>
  <div class="alert-container">
    <div class="alert-wrapper"
      :style="{ textAlign: align, padding: style.padding, background: style.background }">
      <!-- header start -->
      <header class="alert-header">
          <h3 class="alert-title" v-if="title"> {{ title }} </h3>
          <a href="#" class="alert-close" @click="destroyAlert"> &times; </a>
      </header>
      <!-- header start -->


      <!-- main content start -->
      <div class="alert-content">
        <img alt="status icon" class="alert-icon" :src="icon" v-if="icon">
        <p class="alert-msg"> {{ msg }} </p>
      </div>
      <!-- main content end -->


      <!-- footer start -->
      <footer class="alert-footer" :style="{ justifyContent: align }">
        <a href="#" class="alert-btn alert-yes-btn"
          :style="{ flex: yesBtnFlex, background: style.yesBtnColor }"
          @click="clickYesBtn"> 
          {{ yesBtnText }}
        </a>

        <a href="#" class="alert-btn alert-no-btn"
          v-if="needNoBtn"
          @click="clickNoBtn">
          {{ noBtnText }}
        </a>
      </footer>
      <!-- footer end -->
    </div>

    <div class="alert-mask" @click="destroyAlert"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      msg: '',
      icon: '',

      align: 'left',  // left, center, right
      autoCloseTimeout: 0, // auto close alert in mile second
      style: {
        padding: '20px',
        yesBtnColor: '',
        background: '#fff',
      },

      needNoBtn: false, // display no btn
      needCloseBtn: true, // display close btn
      yesBtnText: 'YES',
      noBtnText: 'NO',

      onClickYesBtn: () => ({}), // yes btn click handler
      onClickNoBtn: () => ({}), // no btn click handler
    }
  },

  computed: {
    yesBtnFlex() {
      return this.needNoBtn ? 'none' : 1
    }
  },

  methods: {
    destroyAlert() {
      this.$destroy(true)
    },

    autoCloseAlert() {
      if (this.autoCloseTimeout <= 0) return

      setTimeout(this.destroyAlert, this.autoCloseTimeout)
    },

    clickYesBtn() {
      this.onClickYesBtn()
      this.destroyAlert()
    },

    clickNoBtn() {
      this.onClickNoBtn()
      this.destroyAlert()
    }
  },

  ready() {
    this.autoCloseAlert()
  },
}  
</script>

<style scoped>
.alert-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background:rgba(0,0,0,0.30);
  z-index: 9998;
}

.alert-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 9999;

  background:#fff;
  box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.40);
  border-radius: 2px;

  min-width: 300px;
}

.alert-header {
  display: flex;
  justify-content: space-between;
}

.alert-title {
  font-size: 18px;
  color: #656b79;
  line-height: 20px;
  border-bottom: 1px solid #ddd;

  margin: 0;
  padding: 0 0 10px 0;
  width: 100%;
}
.alert-close {
  font-size: 24px;
  color: #999999;

  text-decoration: none;
  position: absolute;
  top: 5px;
  right: 13px;
}

.alert-content {
  font-size: 16px;
  color: #313742;
  line-height: 16px;

  padding: 14px 14px 24px 14px;
}

.alert-icon {
  display: inline-block;
  margin: 0 0 24px 0;
}
.alert-msg {
  margin: 0;
}

.alert-footer {
  padding: 0 14px 10px 14px;
  display: flex;
}

.alert-btn {
  display: inline-block;
  text-decoration: none;
  padding: 10px 30px;
  border-radius:2px;
  color: #fff;
  font-size: 14px;
  text-align: center;
}
.alert-yes-btn {
  background: #2bb56f;
  margin-right: 10px;
}
.alert-no-btn {
  background: #999da7
}
</style>