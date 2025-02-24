<script setup lang="ts">
import { Status } from "@/enum"
const { size = "48px", statusSize = "8px", status } = defineProps<{
  src: string
  size?: string
  status?: Status
  statusSize?: string
}>()
const statusColor = status === 'online' ? '#34D859' : 'rgba(24, 28, 47, 0.2)'
</script>
<template>
  <div class="avatar">
    <div v-if="status" class="statusIcon"> </div>
    <div class="avatarClip">
      <img :src="src" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.avatar {
  position: relative
}

.avatarClip {
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 50%;
  overflow: hidden;
}

.avatarClip img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.statusIcon {
  position: absolute;
  top: 4px;
  left: 2px;

  &::before {
    @include virtualCircle(white, v-bind(statusSize));
    transform: scale(2);
  }

  &::after {
    @include virtualCircle(v-bind(statusColor), v-bind(statusSize));
  }
}
</style>
