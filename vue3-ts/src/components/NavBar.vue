<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons'
import Avatar from './Avatar.vue';
import faceIcon from "@/assets/images/face-female-1.jpg"
</script>
<template>
  <nav class="navbar-container">
    <Avatar :src="faceIcon"></Avatar>
    <div class="menus">
      <div class="menu-item">
        <a href="#" class="active">
          <FontAwesomeIcon :icon="faCommentDots" style="color:white;" size="xl"></FontAwesomeIcon>
        </a>
      </div>
      <div class="menu-item">
        <a href="#">
          <FontAwesomeIcon :icon="faUser" style="color:white" size="xl"></FontAwesomeIcon>
        </a>
      </div>
      <div class="menu-item">
        <a href="#">
          <FontAwesomeIcon :icon="faFolder" style="color:white;" size="xl"></FontAwesomeIcon>
        </a>
      </div>
      <div class="menu-item">
        <a href="#">
          <FontAwesomeIcon :icon="faStickyNote" style="color:white;" size="xl"></FontAwesomeIcon>
        </a>
      </div>
      <div class="menu-item">
        <a href="#">
          <FontAwesomeIcon :icon="faEllipsisH" style="color:white;" size="xl"></FontAwesomeIcon>
        </a>
      </div>
      <div class="menu-item">
        <a href="#">
          <FontAwesomeIcon :icon="faCog" style="color:white;" size="xl"></FontAwesomeIcon>
        </a>
      </div>
    </div>

  </nav>
</template>
<style lang="scss" scoped>
.navbar-container {
  padding: 30px 0;
  background-color: $darkPurple;
  height: 100vh;
  width: 100px;
  display: grid;
  grid-template-rows: 1fr 4fr;

  .avatar {
    justify-self: center;
  }

  .menus {
    display: grid;
    grid-template-columns: repeat(5, minmax(auto, 88px), 1fr);

    .menu-item {
      &>a {
        width: 100%;
        height: 74px;
        display: flex;
        font-size: 16px;
        align-items: center;
        justify-content: center;

        &.active {
          @include activeBar
        }
      }


      display:flex;
      color: white;
      font-size: 24px;

      &:nth-last-child(1) {
        align-self: end;
      }


    }

  }

}
</style>
