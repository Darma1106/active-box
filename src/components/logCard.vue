<template>
  <ActiveBox
    :initX="initX"
    :initY="initY"
    :initWidth="500"
    :initHeight="200"
    :minWidth="100"
    :minHeight="100"
    class="log-card"
    drag-handle=".card-head"
  >
    <div class="card-head">
      <div class="head-title">title</div>
    </div>
    <div class="card-body">
      <slot />
    </div>
  </ActiveBox>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { ActiveBox } from '../active-box'
import { BoxState, EdgeOptions } from '../active-box/types'

export default defineComponent({
  name: 'App',
  components: { ActiveBox },
  setup() {
    const a: BoxState = {
      x: 1,
      y: 1,
      width: 20,
      height: 20
    }
    const b: EdgeOptions = {
      top: true
    }
    onMounted(() => {
      console.log(a, 'a')
      console.log(b, 'b')
    })
  }
})
</script>

<style lang="less" scope>
.log-card {
  border: 1px solid #aaa;
  box-shadow: 2px 2px 5px #999;
  z-index: 99999;
  position: absolute;
  .card-head {
    position: relative;
    height: 24px;
    background-color: rgb(196, 217, 240);
    border-bottom: 1px black solid;
    .close {
      position: absolute;
      text-align: center;
      width: 25px;
      top: 0;
      right: 0;
      cursor: pointer;
    }
    .head-title {
      text-align: center;
      line-height: 24px;
      font-size: 16px;
    }
  }
  .card-body {
    padding: 10px;
    border: solid 4px rgb(196, 217, 240);
    box-sizing: border-box;
    background-color: #111;
    height: calc(100% - 24px);
    overflow-y: scroll;
  }
}
</style>
