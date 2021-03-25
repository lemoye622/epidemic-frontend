<template>
  <div class="home-page">
    <div>
      <div class="home-list" v-for="(item,index) in city" :key="index">
        <div class="home-title">{{item.adderss}}</div>
         <el-input v-model="item.models"  :placeholder="item.place"></el-input>
      </div>
      <!-- 提交 -->
      <div class="home-list">
        <el-row>
          <el-button type="success" @click="submit()">提交</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import {home} from '../../api/api.js'
// 请求地址
import {deathurl} from '../../api/request.js'
  export default{
    data() {
      return {
        city:[
          {
            adderss:'境外输入',
            models:'',
            place:'请填写境外死亡人数'
          },
          {
            adderss:'广州',
            models:'',
            place:'请填写广州死亡人数'
          },
          {
            adderss:'韶关',
            models:'',
            place:'请填写韶关死亡人数'
          },
          {
            adderss:'深圳',
            models:'',
            place:'请填写深圳死亡人数'
          },
          {
            adderss:'珠海',
            models:'',
            place:'请填写珠海死亡人数'
          },
          {
            adderss:'汕头',
            models:'',
            place:'请填写汕头死亡人数'
          },
          {
            adderss:'佛山',
            models:'',
            place:'请填写佛山死亡人数'
          },
          {
            adderss:'江门',
            models:'',
            place:'请填写江门死亡人数'
          },
          {
            adderss:'湛江',
            models:'',
            place:'请填写湛江死亡人数'
          },
          {
            adderss:'茂名',
            models:'',
            place:'请填写茂名死亡人数'
          },
          {
            adderss:'肇庆',
            models:'',
            place:'请填写肇庆死亡人数'
          },
          {
            adderss:'惠州',
            models:'',
            place:'请填写惠州死亡人数'
          },
          {
            adderss:'梅州',
            models:'',
            place:'请填写梅州死亡人数'
          },
          {
            adderss:'汕尾',
            models:'',
            place:'请填写汕尾死亡人数'
          },
          {
            adderss:'河源',
            models:'',
            place:'请填写河源死亡人数'
          },
          {
            adderss:'阳江',
            models:'',
            place:'请填写阳江死亡人数'
          },
          {
            adderss:'清远',
            models:'',
            place:'请填写清远死亡人数'
          },
          {
            adderss:'东莞',
            models:'',
            place:'请填写东莞死亡人数'
          },
          {
            adderss:'中山',
            models:'',
            place:'请填写中山死亡人数'
          },
          {
            adderss:'东沙群岛',
            models:'',
            place:'请填写东沙群岛死亡人数'
          },
          {
            adderss:'潮州',
            models:'',
            place:'请填写潮州死亡人数'
          },
          {
            adderss:'揭阳',
            models:'',
            place:'请填写揭阳死亡人数'
          },
          {
            adderss:'云浮',
            models:'',
            place:'请填写云浮死亡人数'
          }
        ]
      }
    },
    methods: {
      submit() {
        let data = {
          Abroaddie: this.city[0].models,
          Guangzhoudie: this.city[1].models,
          Shaoguandie: this.city[2].models,
          Shenzhendie: this.city[3].models,
          Zhuhaidie: this.city[4].models,
          Shantoudie: this.city[5].models,
          Foshandie: this.city[6].models,
          Jiangmendie: this.city[7].models,
          Zhanjiangdie: this.city[8].models,
          Maomingdie: this.city[9].models,
          Zhaoqingdie: this.city[10].models,
          Huizhoudie: this.city[11].models,
          Meizhoudie: this.city[12].models,
          Shanweidie: this.city[13].models,
          Heyuandie: this.city[14].models,
          Yangjiangdie: this.city[15].models,
          Qingyuandie: this.city[16].models,
          Dongwandie: this.city[17].models,
          Zhongshandie: this.city[18].models,
          Dongshaqundaodie: this.city[19].models,
          Chaozhoudie: this.city[20].models,
          Jieyangdie: this.city[21].models,
          Yunfudie: this.city[22].models
        }
        home(deathurl, data)
        .then((res)=>{
          console.log(res)
          if (res.data.msg == 'SUCCESS') {
            new this.mytitle(this.$message, 'success', '提交成功').funtitle()
          } else {
            new this.mytitle(this.$message, 'warning', res.data.msg).funtitle()
          }
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    },

    // 进入页面请求数据
    mounted() {

    }
  }
</script>

<style scoped="scoped">
  @import '../../../style/pubiss.css';
  @import '../../../style/table.css';
</style>
