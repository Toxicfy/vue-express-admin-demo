<template>
  <el-form :model="article" label-width="120px" @submit.native.prevent="saveArticle">
    <el-form-item label="文章标题">
      <el-input v-model="article.title" placeholder="请输入标题"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body" placeholder="请输入文章内容"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
  export default {
    name: 'create-article',
    data() {
      return {
        article: {
          title: '',
          body: ''
        }
      }
    },
    created() {
      this.getArticle()
    },
    methods: {
      getArticle() {
        let id = this.$route.params.id;
        this.$http.get(`article/${id}/details`).then(res => {
          this.article = res.data
        })
      },
      saveArticle() {
        const id = this.$route.params.id;
        this.$http.put(`article/${id}/edit`, this.article).then(() => {
          this.$message({
            message: '文章更新成功！',
            type: 'success'
          });
          this.$router.push({name: 'list-article'})
        });
      },
      cancel() {
        this.$router.push({name: 'list-article'});
        this.$message({
          message: '编辑已取消',
        })
      }
    }
  }
</script>
