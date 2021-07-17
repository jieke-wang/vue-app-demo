<template>
  <el-menu
    router
    :default-active="routerActive"
    class="el-menu-veritical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item v-for="i in list" :key="i.path" :index="i.path">
      <i :class="i.meta.icon"></i>
      <template #title>
        {{ i.meta.title }}
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { ref } from "vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";

export default {
  setup() {
    const list = useRouter()
      .getRoutes()
      .filter((v) => v.meta.isShow);
    console.log(list);
    const routerActive = ref(useRoute().path);
    onBeforeRouteUpdate((to) => {
      routerActive.value = to.path;
    });
    return {
      list,
      routerActive,
    };
  }
};
</script>

<style scoped>
.el-menu-vertical {
  height: 100px;
}
</style>