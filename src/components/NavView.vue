<template>
  <!-- main -->
  <!-- 导航栏 -->
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <img src="../assets/logo.png" alt="Vue项目" style="width: 25px;height: 25px">
    <a class="navbar-brand" href="#">帮您记笔记</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/book" ><i class="el-icon-s-grid"></i>首页</router-link>
        </li>
        <li class="nav-item">
          <!-- 传参 -->
          <!--            利用router-link to来配置  能够实现选中效果-->
          <router-link class="nav-link" to="/source"><i class="el-icon-folder-opened"></i>资源</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/sign"><i class="el-icon-message"></i>报名</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login"><i class="el-icon-message"></i>登录</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavView"
}
</script>

<style scoped>

</style>