<template>
  <div id="app">
    <!--<HelloWorld/>-->
    <div class="form-control">
      <div class="label">
        非空
      </div>
      <input v-validate="rules" msg="{required: '不能为空'}" type="text" class="input-control input1">
    </div>

    <div class="form-control">
      <div class="label">
        长度范22围
      </div>
      <input v-validate="{required: true, max: 5, min: 2, reg: /aaa/g}"  msg="{required: '必填'}" type="text" class="input-control input2">
    </div>

    <div class="form-control">
      <div class="label">
        RegExp
      </div>
      <input v-validate="{required: true, min: 1, phone: true}" msg="{required: '此项必填'}" type="text" class="input-control input3">
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
      inputValue: '',
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
      param2: 'bbb',
      rules: {
        required: true,
        max: 5
      }
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
