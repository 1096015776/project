<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
import female from '@/assets/images/face-female-3.jpg'
import Badge from '@/components/Badge.vue'
import { Status } from "@/enum/index"
import smileIcon from "@/assets/icons/smile.svg"
</script>

<template>
  <Avatar :src="female" :status="Status.Online"></Avatar>
  <Badge :count="12">
    <template #icon>
      <icon :data="smileIcon" :width="24" :height="24" color="#4F9DDE"></icon>
    </template>
  </Badge>
  <Badge :count="12" :show-zero="false"></Badge>

</template>
