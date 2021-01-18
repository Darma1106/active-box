<template>
  <div class="interact" ref="ActiveBox">
    <slot />
  </div>
</template>

<script lang="ts">
import Interact from "interactjs";
import { defineComponent, onMounted, PropType, ref, Ref } from "vue";
import { updatePosition, updateSize, getBoxStatus } from "./init";
import { BoxState, EdgeOptions } from "./types";

export default defineComponent({
  name: "Interact",
  props: {
    draggable: {
      type: Boolean,
      default: true,
    },

    resizable: {
      type: Boolean,
      default: true,
    },

    initX: {
      type: Number,
      default: 0,
    },

    initY: {
      type: Number,
      default: 0,
    },

    initWidth: {
      type: Number,
      default: 300,
    },

    initHeight: {
      type: Number,
      default: 300,
    },

    minWidth: {
      type: Number,
      default: 10,
    },

    minHeight: {
      type: Number,
      default: 10,
    },

    maxWidth: {
      type: Number,
      default: Infinity,
    },

    maxHeight: {
      type: Number,
      default: Infinity,
    },

    dragHandle: {
      type: String,
      default: "",
    },

    resizeBarWidth: {
      type: Number,
      default: 10,
    },

    edges: {
      type: Object as PropType<EdgeOptions>,
      default: () => ({ left: true, right: true, bottom: true, top: true }),
    },

    // dragEnd: {
    //   type: Function,
    //   default: () => {},
    // },

    // resizeEnd: {
    //   type: Function,
    //   default: () => {},
    // },
  },
  setup(props, ctx) {
    const ActiveBox: any = ref(null);
    function init() {
      updatePosition(ActiveBox.value, props.initX, props.initY);
      updateSize(ActiveBox.value, props.initWidth, props.initHeight);

      const instance: Interact.Interactable = Interact(ActiveBox.value);

      if (props.draggable) {
        instance.draggable({
          allowFrom: props.dragHandle || ActiveBox.value,

          modifiers: [
            Interact.modifiers.restrictRect({
              restriction: "parent",
            }),
          ],

          listeners: {
            start: (event) => {
              ctx.emit("dragStart", getBoxStatus(event.target));
            },
            move: (event) => {
              updatePosition(event.target, event.dx, event.dy);
            },

            end: (event) => {
              ctx.emit("dragEnd", getBoxStatus(event.target));
            },
          },
        });
      }

      if (props.resizable) {
        instance.resizable({
          margin: props.resizeBarWidth,

          edges: props.edges,

          listeners: {
            start: (event) => {
              ctx.emit("resizeStart", getBoxStatus(event.target));
            },
            move: (event) => {
              updateSize(event.target, event.rect.width, event.rect.height);
              updatePosition(
                event.target,
                event.deltaRect.left,
                event.deltaRect.top
              );
            },

            end: (event) => {
              ctx.emit("resizeEnd", getBoxStatus(event.target));
            },
          },

          modifiers: [
            Interact.modifiers.restrictEdges({
              outer: "parent",
            }),

            Interact.modifiers.restrictSize({
              min: { width: props.minWidth, height: props.minHeight },
              max: { width: props.maxWidth, height: props.maxHeight },
            }),
          ],
        });
      }
    }
    onMounted(() => {
      init();
    });
    return { ActiveBox, init };
  },
});
</script>

<style>
.interact {
  box-sizing: border-box;
  user-select: none;
  touch-action: none;
}
</style>
