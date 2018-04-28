<template>
  <div id="app">
    <!--<HelloWorld/>-->
    <div class="form-control">
      <div class="label">
        非空
      </div>
      <input v-validate.aa.bb="param2" type="text" class="input-control">
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
  },
  data () {
    return {
      validateData: [
        {
          pattern: 'empty',
          errMsg: '此处不能为空'
        },
        {
          pattern: 'email',
          errMsg: '您输入的邮箱不合法'
        },
        {
          pattern: 'phone',
          errMsg: '您输入的手机号不合法'
        }
      ],
      param1: 'aaa',
      param2: 'bbb'
    }
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
