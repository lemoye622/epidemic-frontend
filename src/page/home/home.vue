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
import {preferurl} from '../../api/request.js'
export default{
  data() {
    return {
      city:[
        {
          adderss:'境外输入',
          models:'',
          place:'请填写境外输入确诊人数'
        },
        {
          adderss:'广州',
          models:'',
          place:'请填写广州确诊人数'
        },
        {
          adderss:'韶关',
          models:'',
          place:'请填写韶关确诊人数'
        },
        {
          adderss:'深圳',
          models:'',
          place:'请填写深圳确诊人数'
        },
        {
          adderss:'珠海',
          models:'',
          place:'请填写珠海确诊人数'
        },
        {
          adderss:'汕头',
          models:'',
          place:'请填写汕头确诊人数'
        },
        {
          adderss:'佛山',
          models:'',
          place:'请填写佛山确诊人数'
        },
        {
          adderss:'江门',
          models:'',
          place:'请填写江门确诊人数'
        },
        {
          adderss:'湛江',
          models:'',
          place:'请填写湛江确诊人数'
        },
        {
          adderss:'茂名',
          models:'',
          place:'请填写茂名确诊人数'
        },
        {
          adderss:'肇庆',
          models:'',
          place:'请填写肇庆确诊人数'
        },
        {
          adderss:'惠州',
          models:'',
          place:'请填写惠州确诊人数'
        },
        {
          adderss:'梅州',
          models:'',
          place:'请填写梅州确诊人数'
        },
        {
          adderss:'汕尾',
          models:'',
          place:'请填写汕尾确诊人数'
        },
        {
          adderss:'河源',
          models:'',
          place:'请填写河源确诊人数'
        },
        {
          adderss:'阳江',
          models:'',
          place:'请填写阳江确诊人数'
        },
        {
          adderss:'清远',
          models:'',
          place:'请填写清远确诊人数'
        },
        {
          adderss:'东莞',
          models:'',
          place:'请填写东莞确诊人数'
        },
        {
          adderss:'中山',
          models:'',
          place:'请填写中山确诊人数'
        },
        {
          adderss:'东沙群岛',
          models:'',
          place:'请填写东沙群岛确诊人数'
        },
        {
          adderss:'潮州',
          models:'',
          place:'请填写潮州确诊人数'
        },
        {
          adderss:'揭阳',
          models:'',
          place:'请填写揭阳确诊人数'
        },
        {
          adderss:'云浮',
          models:'',
          place:'请填写云浮确诊人数'
        }
      ]
    }
  },
  methods: {
    submit(){
      let data = {
        Abroaddig: this.city[0].models,
        Guangzhoudig: this.city[1].models,
        Shaoguandig: this.city[2].models,
        Shenzhendig: this.city[3].models,
        Zhuhaidig: this.city[4].models,
        Shantoudig: this.city[5].models,
        Foshandig: this.city[6].models,
        Jiangmendig: this.city[7].models,
        Zhanjiangdig: this.city[8].models,
        Maomingdig: this.city[9].models,
        Zhaoqingdig: this.city[10].models,
        Huizhoudig: this.city[11].models,
        Meizhoudig: this.city[12].models,
        Shanweidig: this.city[13].models,
        Heyuandig: this.city[14].models,
        Yangjiangdig: this.city[15].models,
        Qingyuandig: this.city[16].models,
        Dongwandig: this.city[17].models,
        Zhongshandig: this.city[18].models,
        Dongshaqundaodig: this.city[19].models,
        Chaozhoudig: this.city[20].models,
        Jieyangdig: this.city[21].models,
        Yunfudig: this.city[22].models,
      }
      home(preferurl,data).then((res)=>{
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
    },
  },

     // 进入页面请求数据




}
</script>

<style scoped="scoped">
@import '../../../style/pubiss.css';
@import '../../../style/table.css';
</style>
