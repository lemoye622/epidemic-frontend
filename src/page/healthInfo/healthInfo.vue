<template>
  <div class="home-page">
    <!-- 表格布局 -->
    <div class="var-table" v-if="reveal">
      <!-- 标题 -->
      <div class="var-title">
        <div v-for="(item,index) in tableData" :key="index">{{item}}</div>
      </div>
      <!-- 内容 -->
      <div>
        <div class="var-content" v-for="(item,index) in healthInfo" :key="index">
          <div>
            <span>姓名: {{item.name}}</span>
            <span>手机号码: {{item.phone}}</span>
            <span>身份证号码: {{item.IDcard}}</span>
            <span class="complete" @click="completeInfo(item)">完整信息</span>
          </div>
          <div>{{item.isPermanentLive}}</div>
          <div>
            <span v-for="(content, index) in item.selectSymptom" :key="index">{{content}}</span>
          </div>
          <div>
            <span class="status" v-for="(project, index) in item.healthCodeState" :key="index">{{project}}</span>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :center="true">
      <div class="complete-popup" v-for="(item, index) in completedata" :key="index">
        <div>
          <div class="complete-title">个人信息</div>
          <div>
            <span>姓名: {{item.name}}</span>
            <span>手机号码: {{item.phone}}</span>
            <span>身份证号码: {{item.IDcard}}</span>
            <span>性别: {{item.selectGender}}</span>
            <span>出生日期: {{item.birthday}}</span>
            <span>户籍所在地: {{item.koseki}}</span>
            <span>居住省市: {{item.residencePlace}}</span>
            <span>详细地址: {{item.detailAddress}}</span>
          </div>
        </div>
        <div>
          <div class="complete-title">是否常住广东</div>
          <div>
            <span>{{item.isPermanentLive}}</span>
          </div>
        </div>
        <div>
          <div class="complete-title">是否有不良症状</div>
          <div>
            <span v-for="(content, index) in item.selectSymptom" :key="index">{{content}}</span>
          </div>
        </div>
        <div>
          <div class="complete-title">粤康码状态</div>
          <div>
            <span class="status" v-for="(project, index) in item.healthCodeState" :key="index">{{project}}</span>
          </div>
        </div>
      </div>
    </el-dialog>

    <!-- 没有数据 -->
    <div class="nodatas" v-if="!reveal">
      暂无人员上报行程信息！
    </div>
  </div>
</template>

<script>
import {getdata} from '../../api/api.js'
// 请求地址
import {healthInforUrl} from '../../api/request.js'
export default {
  data() {
    return {
      // 控制表格的显示与隐藏
      reveal: true,
      dialogVisible: false,
      tableData: ['个人信息', '是否常住广东', '是否有不良症状', '粤康码状态'],
      completedata: [],
      healthInfo: []
    }
  },

  created() {
    this.getHealthInfo()
  },

  methods: {
    // 完整信息
    completeInfo(item) {
      console.log(item)
      let arr = []
      arr.push(item)
      this.completedata = arr
      this.dialogVisible = true
    },

    getHealthInfo() {
      getdata(healthInforUrl)
      .then((res)=>{
        console.log(res)
        if (res.status === 200) {
          // if (res.data.data.length === 0) {
          //   // 没有数据时，隐藏表格组件
          //   this.reveal = false
          // } else {
          //   this.healthInfo = res.data.data
          // }
          this.reveal = false
          this.healthInfo = res.data.data
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped="scoped">
@import '../../../style/pubiss.css';
.var-title {
  background: #f5f7fa; 
  height: 50px; 
  display: flex; 
  justify-content: space-around;
  align-items: center; 
  font-weight: bold;
  color: #909399;
}
.var-title div {
  width: 200px; 
  text-align: center;
}
.var-table {
  margin-top: 20px;
}
/* 内容 */
.var-content {
  display: flex; 
  justify-content: space-around; 
  align-items: center;
  height: 120px;
  overflow: hidden;
  border-bottom: 1px solid #ebebeb;
}
.var-content div {
  width: 270px; 
  text-align: center;
}
.var-content div:nth-child(1) {
  text-align: left;
}
.var-content span {
  display: block; 
  padding: 5px 0;
}
/* 问：为什么使用 last-child 产生的效果是最后一行所有 span 都变色？ */
/* .var-content span:last-child {
  display: inline-block;
  background: #ff0000;
  padding: 5px 0;
} */
/* 问：虽然行内块样式改成功了，但为什么控制台显示还是一个文字一个 span */
.var-content .status {
  display: inline-block;
  /* background: #ff0000; */
  padding: 5px 0;
}
/* 查看完整 */
.complete {
  color: #409EFF;
  cursor:pointer;
}
/* 没有数据 */
.nodatas {
  text-align: center;
  padding-top: 100px;
  font-size: 20px;
  color: #C0C4CC;
}
/* 完整弹窗 */
.complete-popup span {
  display: block; 
  padding: 0.375rem 0;
}
.complete-popup .status {
  display: inline-block; 
  padding: 0.375rem 0;
}
.complete-title {
  font-size: 15px; 
  font-weight: bold; 
  padding: 0.375rem 0;
}
</style>
