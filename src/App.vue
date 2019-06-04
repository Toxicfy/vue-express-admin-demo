<template>
  <el-container class="main-container">
    <!-- 侧边栏 -->
    <el-aside class="left" width="200px">
      <el-menu router :default-openeds="['1']">
        <el-submenu index="1">
          <!--  -->
          <template slot="title">
            <i class="el-icon-document"></i>内容管理
          </template>
          <!--  -->
          <el-menu-item-group>
            <el-menu-item index="/articles/index">文章列表</el-menu-item>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- container -->
    <el-container>
      <el-header>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <!-- router 切换 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<style>
  html,body{
    margin: 0;
    padding: 0;
  }

  .main-container{
    height: 100vh;
    border: 1px solid #eee;
  }

  .main-container .left{
    background-color: rgb(238, 241, 246)
  }

  .el-header {
    text-align: right; 
    font-size: 12px;
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
export default {
  
}
</script>
