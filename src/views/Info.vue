<template>
  <div>
    <el-date-picker
      v-model="value"
      type="datetime"
      format="YYYY-MM-DD HH:mm"
      placeholder="请选择时间"
    ></el-date-picker>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    let value = ref("");

    return { value };
  },
};
</script>