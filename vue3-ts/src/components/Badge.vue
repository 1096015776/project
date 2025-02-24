<template>
  <div class="badge-container">
    <div class="badge-dot" v-if="Object.keys(slots).includes('icon')" v-show="show">
      <slot name="icon" />
    </div>
    <div class="badge-default" :style="!showZero && count === 0 && 'visibility: hidden;'" v-else>
      {{ count }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useSlots } from 'vue';

const { show, showZero = false, count } = defineProps<{
  show?: Boolean;
  showZero?: Boolean;
  count?: number;
}>()
const slots = useSlots()
console.log(count)
</script>
<style lang="scss">
.badge-container {
  display: inline-flex;
  align-items: center;
  justify-self: center;

  .badge-dot {
    position: relative;
    padding: 5px;

    &::before {
      @include virtualCircle($red, 6px);
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .badge-default {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04),
      0px 6px 12px 0px rgba(0, 0, 0, 0.08);
    @include circle($red, 26px);
    font-size: $normal;
    color: white;
    // visibility: hidden;
  }
}
</style>
