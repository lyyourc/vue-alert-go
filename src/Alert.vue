<template>
  <div class="alert-go-container"
    :style="{ transition: `all ${animateDuration} ease` }"
    :transition="animate">
    <div class="alert-go-wrapper"
      :style="{
        textAlign: textAlign,
        transition: `all ${animateDuration} ease`
      }"
    >
      <div class="alert-go-body"
        :style="{
          padding: box.padding,
          borderRadius: box.borderRadius,
          background: box.bgColor,
          transition: `all ${animateDuration} ease`
        }">
        <!-- header start -->
        <header class="alert-go-header">
            <h3 class="alert-go-title" v-if="title"> {{ title }} </h3>
            <a href="#" class="alert-go-close"
              v-show="needCloseBtn"
              @click="destroyAlert"
            > &times; </a>
        </header>
        <!-- header start -->


        <!-- main content start -->
        <div class="alert-go-content">
          <img alt="status icon" class="alert-go-icon"
            :src="iconSrc" v-show="iconSrc"
          >
          <p class="alert-go-msg"
            :style="{ color: style.textColor }"
          > {{ msg }} </p>
        </div>
        <!-- main content end -->


        <!-- footer start -->
        <footer class="alert-go-footer"
          v-show="needYesBtn || needNoBtn "
          :style="{ justifyContent: align }"
        >
          <a href="#" class="alert-go-btn alert-go-yes-btn"
            v-show="needYesBtn"
            :style="{ flex: yesBtnFlex, background: yesBtnBg }"
            @click="clickYesBtn">
            {{ yesBtnText }}
          </a>

          <a href="#" class="alert-go-btn alert-go-no-btn"
            v-if="needNoBtn"
            @click="clickNoBtn">
            {{ noBtnText }}
          </a>
        </footer>
        <!-- footer end -->
      </div>
    </div>

    <div class="alert-go-mask"
      @click="closeWhenClickMask && destroyAlert()">
    </div>
  </div>
</template>

<script>
import okIcon from './assets/ok.svg'
import errorIcon from './assets/error.svg'
import { isFunction } from './utils/util'

export default {
  data() {
    return {
      $$destroyed: false,
    }
  },

  computed: {
    box() {
      return this.style.box
    },
    yesBtnFlex() {
      return this.needNoBtn ? 'none' : 1
    },

    textAlign() {
      return this.align
        ? this.align
        : this.type === ''
          ? 'left'
          : 'center'
    },

    iconSrc() {
      const { icon, type } = this

      if (icon) return this.icon
      else if (type === 'success') return okIcon
      else if (type === 'error') return errorIcon
      else return ''
    },

    yesBtnBg() {
      const { type, yesBtnBgColor } = this

      if (yesBtnBgColor) return yesBtnBgColor
      else if (type === 'error') return '#4993e5'
      else return '#2bb56'
    },
  },

  methods: {
    destroyAlert() {
      const { cbWhenClose } = this

      isFunction(cbWhenClose) && cbWhenClose()
      this.$destroy(true)
      this.$$destroyed = true
    },

    autoCloseAlert() {
      if (this.autoCloseTimeout <= 0) return

      setTimeout(this.destroyAlert, this.autoCloseTimeout)
    },

    clickYesBtn() {
      const { onClickYesBtn } = this

      isFunction(onClickYesBtn) && onClickYesBtn()
      this.destroyAlert()
    },

    clickNoBtn() {
      const { onClickNoBtn } = this

      isFunction(onClickNoBtn) && onClickNoBtn()
      this.destroyAlert()
    },
  },

  ready() {
    this.autoCloseAlert()
  },
}
</script>

<style scoped>
/**
 * container
 * 设置 z-index
 */
.alert-go-container {
  /* if other element set `z-index` */
  /* it will cauze a white empty flash */
  position: relative;
  z-index: 9999;
}


/**
 * mask
 * 遮罩层
 */
.alert-go-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background:rgba(0,0,0,0.30);
  z-index: 9998;
}


/**
 * wrapper
 * 负责定位
 */
.alert-go-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}


/**
 * body
 * 设置背景色，border-radius, padding
 */
.alert-go-body {
  min-width: 300px;
  background: #fff;
}


/**
 * header 头部
 * 由「title」组成「关闭按钮」组成
 */
.alert-go-header {
  & .alert-go-title {
    font-size: 18px;
    color: #656b79;
    line-height: 20px;
    border-bottom: 1px solid #ddd;

    margin: 0;
    padding: 0 0 14px 0;
    width: 100%;
  }

  & .alert-go-close {
    font-size: 24px;
    color: #999999;

    text-decoration: none;
    position: absolute;
    top: 5px;
    right: 13px;
  }
}


/**
 * 主要内容
 * 由「图标」以及「消息」组成
 */
.alert-go-content {
  font-size: 16px;
  color: #313742;
  line-height: 16px;
  padding: 10px 14px;

  & .alert-go-icon {
    display: inline-block;
    margin: 0 0 10px 0;
  }

  & .alert-go-msg {
    margin: 14px 0;
    color: #656b78;
  }
}


/**
 * footer
 * 由「Yes按钮」和「No按钮」组成
 */
.alert-go-footer {
  display: flex;
  margin: 10px 0;
  padding: 0 14px;

  & .alert-go-btn {
    display: inline-block;
    text-decoration: none;
    margin-right: 10px;
    padding: 12px 30px;
    border-radius: 2px;
    color: #fff;
    font-size: 14px;
    text-align: center;

    &:last-child {
      margin-right: 0;
    }
  }

  & .alert-go-yes-btn {
    background: #2bb56f;
  }
  & .alert-go-no-btn {
    background: #999da7;
  }
}


/**
 * 动画, transition
 */
.alert-go-container {
  opacity: 1;
}

/* fade start */
.fade-enter,
.fade-leave {
  opacity: 0;
}
/* fade end */

/* bound start */
.bound-enter,
.bound-leave {
  opacity: 0;
}

.bound-enter .alert-go-body,
.bound-leave .alert-go-body {
  transform: scale(1.2);
}
/* bound end */

/* slide start */
.slide-enter,
.slide-leave {
  opacity: 0;
}

.slide-enter .alert-go-wrapper,
.slide-leave .alert-go-wrapper {
  transform: translateY(-1024px);
}
/* slide end */

</style>
