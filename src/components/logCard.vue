<template>
  <ActiveBox
    :initX="initX"
    :initY="initY"
    :initWidth="500"
    :initHeight="200"
    :minWidth="100"
    :minHeight="100"
    :edges="edge"
    class="log-card"
    ref="LogCard"
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
import { defineComponent, onMounted, ref, Ref, nextTick } from "vue";
import { ActiveBox } from "../active-box";
import { BoxState, EdgeOptions } from "../active-box/types";

export default defineComponent({
  name: "App",
  components: { ActiveBox },
  setup() {
    const a: BoxState = {
      x: 1,
      y: 1,
      width: 20,
      height: 20,
    };
    const edge: EdgeOptions = {
      top: true,
      left: true,
      bottom: true,
      right: true,
    };
    const LogCard: Ref<null> | Ref<HTMLElement> = ref(null);
    let initX: Ref<number> = ref(0);
    let initY: Ref<number> = ref(0);
    // 右下角定位
    // function setBoxPosition(x: number, y: number): void {
    //   const DOMRect: DOMRect = (LogCard.value as any).parentNode.getBoundingClientRect();
    //   initX.value = DOMRect.width - 500 - x;
    //   initY.value = DOMRect.height - 200 - y;
    //   visible.value = true;
    // }
    // nextTick(() => {
    //   setBoxPosition(20, 20);
    // });
    // const DOMRect = LogCard["value"]["parentNode"].getBoundingClientRect();
    // this.initX = DOMRect.width - 520;
    // this.initY = DOMRect.height - 220;

    onMounted(() => {
      console.log(a, "a");
      console.log(edge, "b");
    });
    return {
      edge,
      initX,
      initY,
      LogCard,
      DOMRect,
    };
  },
});
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
