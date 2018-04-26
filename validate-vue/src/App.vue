<template>
  <div id="app">
    <!--<HelloWorld/>-->
    <div class="form-control">
      <div class="label">
        非空
      </div>
      <input type="text" class="input-control">
    </div>

    <div class="form-control">
      <div class="label">
        长度范围
      </div>
      <input type="text" class="input-control">
    </div>

    <div class="form-control">
      <div class="label">
        RegExp
      </div>
      <input type="text" class="input-control">
    </div>

    <div class="form-control">
      <div class="label">
        自定义
      </div>
      <input type="text" class="input-control">
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
