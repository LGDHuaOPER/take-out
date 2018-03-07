<template>
  <div id="app">
    <!--<HelloWorld/>-->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header.vue';
  const ERR_OK = 0;
  //  与export的区别：是将整个作为 module.export
  export default {
    data () {
      return {
        seller: {}
      };
    },
    created() {
      // GET /someUrl
      this.$http.get('/api/seller').then(response => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
          // vue实例化中自动添加get set 方法
          console.log(this.seller);
        }
      }, response => {
        // error callback
      });
    },
    components: {'v-header': header}
  };
  //  import HelloWorld from './components/HelloWorld';
  //
  //  export default {
  //    name: 'App',
  //    components: {
  //      HelloWorld
  //    }
  //  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //  @import是stylus的语法
  @import "./common/stylus/mixin.styl"
  /*@import "common/stylus/icon.styl"*/
  /*@import "common/stylus/base.styl"*/
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      /*1px底部边框*/
      /*border-bottom 1px solid rgba(7,17,27,0.1)*/
      /*position relative*/
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex 1
        text-align center
        /*&表示父元素.tab-item*/
        & > a
          /*实现点击边上也可出发跳转*/
          display block
          font-size 14px
          color rgb(77, 85, 93)
          /*有规律地写CSS，影响布局的display等写前面，宽高写后面，最后写字体、颜色等可被继承的*/
          /*默认值 v-link-active*/
          &.active
            color rgb(240, 20, 20)

  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
