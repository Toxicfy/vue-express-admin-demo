<template>
  <el-form :model="article" label-width="120px" @submit.native.prevent="saveArticle">
    <el-form-item label="文章标题">
      <el-input v-model="article.title" placeholder="请输入标题"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body" placeholder="请输入文章内容"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button type="">取消</el-button>
    </el-form-item>
  </el-form>

</template>

<style>
</style>

<script>
  export default {
    name: 'create-arcticle',
    data() {
      return {
        article: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      saveArticle() {
        this.$http.post('article', this.article).then(res => {
          this.$message({
            message: res.data.message,
            type: 'success'
          });
          this.$router.push({name: 'list-article'})
        });
      }
    }
  }
</script>
