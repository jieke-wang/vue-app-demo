<template>
  <div>
    <el-date-picker
      v-model="value"
      type="datetime"
      format="YYYY-MM-DD HH:mm"
      placeholder="请选择时间"
    ></el-date-picker>

    <el-input v-model="person.name" placeholder="请输入name"></el-input>
    <el-input v-model="person.age" placeholder="请输入age"></el-input>
  </div>
</template>

<script lang="ts">
// vue3 中 watch 函数
// https://www.cnblogs.com/baifangzi/p/14234981.html

import { reactive, ref, watch } from "vue";
export default {
  setup() {
    let value = ref("");

    let person = reactive({
      name: "jack",
      age: 18,
    });

    // 简单类型监听
    // watch(value, (newValue, oldValue) => {
    //   console.log({
    //     newValue,
    //     oldValue,
    //   });
    // });

    // 监听整个对象无效
    // watch(() => person, (newValue, oldValue) => {
    //   debugger;
    //   console.log({
    //     newValue,
    //     oldValue
    //   });
    // });
    
    // 复杂对象监听
    // watch(
    //   () => person.name,
    //   (newValue, oldValue) => {
    //     // debugger;
    //     // console.dir(arguments);
    //     // console.log(arguments);
    //     // let obj = {
    //     //   newValue: arguments[0],
    //     //   oldValue: arguments[1]
    //     // };
    //     // console.log(obj);

    //     console.log({
    //       newValue,
    //       oldValue,
    //     });
    //   }
    // );

    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     // console.dir(arguments);
    //     // console.log(arguments);

    //     console.log({
    //       newValue,
    //       oldValue,
    //     });
    //   }
    // );

    watch([() => person.name, value], ([name, value], [preName, preValue]) => {
      // debugger;
      console.log({
        name,
        value,
        preName,
        preValue,
      });
    });

    return { value, person };
  },
};
</script>