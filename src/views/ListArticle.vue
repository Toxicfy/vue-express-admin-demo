<template>
  <el-table :data="tableData" class="main-table" border>
    <el-table-column prop="title" label="标题">
    </el-table-column>
    <el-table-column prop="body" label="内容">
    </el-table-column>
    <el-table-column prop="" label="操作">
      <template slot-scope="scope">
        <el-button type="text" @click.native.prevent="editArticle(scope.row._id)">编辑</el-button>
        <el-button type="text" @click.native.prevent="isDelete(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    created() {
      this.getArticleList()
    },

    methods: {
      // 获取文章列表
      getArticleList() {
        this.$http('article').then(res => {
          this.tableData = res.data;
          console.log(this.tableData)
        })
      },
      // 弹框
      isDelete(id) {
        this.$confirm('是否删除当前数据？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteListItem(id);
        }).catch(() => {
          this.$message({type: 'info', message: '已取消删除'});
        })
      },
      // 删除文章
      deleteListItem(id) {
        this.$http.delete(`/article/${id}`).then(res => {
          this.$message({type: 'info', message: res.data.message});
          this.getArticleList();
        })
      },
      // 编辑文章
      editArticle(id) {
        this.$router.push(`/article/${id}/edit`)
      }
    }
  };
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
</style>
