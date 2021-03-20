<template>
  <div id="epidemic-login">
    <div class="login-content">
      <div class="login-cont">
        <div class="login-title">广东省卫健委抗疫管理中心</div>
        <div class="login-user">
           <img src="../../images/zhanghao.svg" />
           <el-input v-model="account" placeholder="请输入账号"></el-input>
        </div>
        <div class="login-user">
          <img src="../../images/mima.svg" />
         <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
        </div>

        <!-- 登录 -->
        <div class="login-btn" @click="login()">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import {home, getdata} from '../../api/api.js'
  // 请求地址
import {loginurl} from '../../api/request.js'
export default {
  data() {
    return {
        account: '',
        password:''
    }
  },

  beforeCreate() {
    console.log('登录页')
    let ids = localStorage.getItem("ids")
    if(!ids || ids != 1){
      localStorage.setItem("ids", 1)
    }
  },

  methods:{
    login() {
      let data = {'account': this.account, 'password': this.password}
      home(loginurl, data)
      .then((res)=>{
        console.log(res)
        if(res.data.msg == 'SUCCESS'){
          console.log('登录成功')
          // 存储到本地
          localStorage.setItem("token", res.data.data)
          this.$router.push({name:'home'})
        }else{
          new this.mytitle(this.$message, 'warning', res.data.msg).funtitle()
        }
      })
      .catch((err)=>{
        new this.mytitle(this.$message, 'info', '服务器错误').funtitle()
      })
    }
  }
}
</script>

<style>
#epidemic-login {
  background-image: url(../../images/kangyi.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  moz-background-size: cover;
  min-height: 100vh;
}
.login-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-cont {
      width: 500px;
      height: 300px;
      background:	#00BFFF;
      border-radius: 5px;
}
.login-title {
  text-align: center; 
  color: white; 
  font-size: 30px; 
  padding-top: 30px;
  font-family: Arial, Helvetica, sans-serif;
}
.login-user {
  width: 400px; 
  margin: 0 auto; 
  padding-top: 30px; 
  height: 40px;
  display: flex;
  align-items: center;
}
.login-user img {
  width: 25px; 
  height: 25px; 
  padding-right: 10px;
}
.login-btn {
  width: 200px; 
  height: 40px; 
  background: #1E90FF;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  margin: 30px auto 0 auto;
  border-radius: 5px; 
  font-size: 20px; 
  color: white;
  cursor:pointer;
}
</style>
