<template>
  <div class="swiper">
    <div class="left">
      <img class="left-up" src="../assets/images/up.svg" @click="onLeftPrev" />
      <div class="left-block">
        <img
          class="left-image"
          :class="index === leftActiveIndex && 'active'"
          v-for="(path, index) in imageList"
          :src="path"
          @click="onLeftSelect(index)"
        />
      </div>
      <img
        class="left-down"
        src="../assets/images/down.svg"
        @click="onLeftNext"
      />
    </div>
    <div class="right">
      <img
        class="right-image"
        :class="leftActiveIndex > 0 && 'left-400'"
        v-for="path in rightImageList"
        :src="path"
        @mousedown="onRightMouseStart"
        @mousemove="onRightMouseOver"
        @mouseup="onRightMouseEnd"
        @mouseout="onRightMouseEnd"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ["imageList"],
  data() {
    return {
      leftActiveIndex: 0,
      rightImageList: [],
      mousePos: {
        startX: 0,
        endX: 0,
      },
    };
  },
  mounted() {
    this.rightImageList = [this.imageList[this.leftActiveIndex]];
  },
  watch: {
    leftActiveIndex(curIndex) {
      this.rightImageList = this.imageList.slice(
        Math.max(curIndex - 1, 0),
        curIndex + 2,
      );
    },
  },
  methods: {
    onLeftSelect(index) {
      this.leftActiveIndex = index;
    },
    onLeftPrev(e) {
      if (this.leftActiveIndex <= 0) {
        return;
      }
      this.leftActiveIndex -= 1;
    },

    onLeftNext() {
      if (this.leftActiveIndex >= this.imageList.length - 1) {
        return;
      }
      this.leftActiveIndex += 1;
    },

    onRightMouseStart(e) {
      this.mousePos.startX = e.clientX;
    },

    onRightMouseOver(e) {
      this.mousePos.endX = e.clientX;
    },

    onRightMouseEnd() {
      const moveGap = 50
      if (this.mousePos.endX - this.mousePos.startX < -moveGap) {
        // 向左滑动切换下一张
        this.onLeftNext();
      } else if (this.mousePos.endX - this.mousePos.startX > moveGap) {
        // 向右
        this.onLeftPrev();
      }

      // 拖动结束重置位置
      this.mousePos = {
        endX: 0,
        startX: 0
      }
    }
  },
};
</script>
<style>
.swiper {
  display: flex;
  width: 800px;
  margin: 100px auto 0 auto;
}
.swiper .left {
  width: 100px;
  height: 400px;
  position: relative;
  margin-right: 30px;
}
.swiper .left-block {
  border: 1px solid;
  width: 100px;
  height: 400px;
  margin-right: 20px;
  overflow-y: auto;
  position: relative;
}

.swiper .left-block .active {
  border: 10px solid yellow;
}

.swiper .left .left-up {
  width: 40px;
  height: 40px;
  position: absolute;
  top: -40px;
}
.swiper .left .left-down {
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: -40px;
}
.swiper .left-block .left-image {
  width: 80px;
  height: 80px;
  margin: 0 auto 10px auto;
  display: block;
}

.swiper .right {
  border: 1px solid;
  width: 400px;
  height: 400px;
  overflow: hidden;
  display: flex;
}
.swiper .right .right-image {
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
}
.swiper .right .left-400 {
  transform: translateX(-400px);
}
</style>
