<template>
  <div class="ordering">
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
import {cureurl} from '../../api/request.js'
export default{
  data() {
    return {
      city: [
        {
          adderss:'境外输入',
          models:'',
          place:'请填写境外治愈人数'
        },
        {
          adderss:'广州',
          models:'',
          place:'请填写广州治愈人数'
        },
        {
          adderss:'韶关',
          models:'',
          place:'请填写韶关治愈人数'
        },
        {
          adderss:'深圳',
          models:'',
          place:'请填写深圳治愈人数'
        },
        {
          adderss:'珠海',
          models:'',
          place:'请填写珠海治愈人数'
        },
        {
          adderss:'汕头',
          models:'',
          place:'请填写汕头治愈人数'
        },
        {
          adderss:'佛山',
          models:'',
          place:'请填写佛山治愈人数'
        },
        {
          adderss:'江门',
          models:'',
          place:'请填写江门治愈人数'
        },
        {
          adderss:'湛江',
          models:'',
          place:'请填写湛江治愈人数'
        },
        {
          adderss:'茂名',
          models:'',
          place:'请填写茂名治愈人数'
        },
        {
          adderss:'肇庆',
          models:'',
          place:'请填写肇庆治愈人数'
        },
        {
          adderss:'惠州',
          models:'',
          place:'请填写惠州治愈人数'
        },
        {
          adderss:'梅州',
          models:'',
          place:'请填写梅州治愈人数'
        },
        {
          adderss:'汕尾',
          models:'',
          place:'请填写汕尾治愈人数'
        },
        {
          adderss:'河源',
          models:'',
          place:'请填写河源治愈人数'
        },
        {
          adderss:'阳江',
          models:'',
          place:'请填写阳江治愈人数'
        },
        {
          adderss:'清远',
          models:'',
          place:'请填写清远治愈人数'
        },
        {
          adderss:'东莞',
          models:'',
          place:'请填写东莞治愈人数'
        },
        {
          adderss:'中山',
          models:'',
          place:'请填写中山治愈人数'
        },
        {
          adderss:'东沙群岛',
          models:'',
          place:'请填写东沙群岛治愈人数'
        },
        {
          adderss:'潮州',
          models:'',
          place:'请填写潮州治愈人数'
        },
        {
          adderss:'揭阳',
          models:'',
          place:'请填写揭阳治愈人数'
        },
        {
          adderss:'云浮',
          models:'',
          place:'请填写云浮治愈人数'
        }
      ]
    }
  },

  methods: {
    submit() {
      let data = {
        Abroadcure: this.city[0].models,
        Guangzhoucure: this.city[1].models,
        Shaoguancure: this.city[2].models,
        Shenzhencure: this.city[3].models,
        Zhuhaicure: this.city[4].models,
        Shantoucure: this.city[5].models,
        Foshancure: this.city[6].models,
        Jiangmencure: this.city[7].models,
        Zhanjiangcure: this.city[8].models,
        Maomingcure: this.city[9].models,
        Zhaoqingcure: this.city[10].models,
        Huizhoucure: this.city[11].models,
        Meizhoucure: this.city[12].models,
        Shanweicure: this.city[13].models,
        Heyuancure: this.city[14].models,
        Yangjiangcure: this.city[15].models,
        Qingyuancure: this.city[16].models,
        Dongwancure: this.city[17].models,
        Zhongshancure: this.city[18].models,
        Dongshaqundaocure: this.city[19].models,
        Chaozhoucure: this.city[20].models,
        Jieyangcure: this.city[21].models,
        Yunfucure: this.city[22].models
      }
      home(cureurl,data)
      .then((res)=>{
        console.log(res)
        if (res.data.msg == 'SUCCESS') {
          new this.mytitle(this.$message,'success','提交成功').funtitle()
        } else {
          new this.mytitle(this.$message,'warning',res.data.msg).funtitle()
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },

  // 进入页面请求数据
  mounted() {

  },
}
</script>

<style scoped="scoped">
@import '../../../style/pubiss.css';
@import '../../../style/table.css';
</style>
