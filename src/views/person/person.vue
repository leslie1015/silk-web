<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="person">
    <Layout>
      <template v-slot:header>
        <HeadTop></HeadTop>
      </template>
      <template v-slot:ad-left>
        <h1></h1>
      </template>
      <template v-slot:main>
        <div class="person-container">
          <div class="person-head">
            <el-row>
              <el-col :span="6">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="headImgUrl"
                  :fit="fit"
                ></el-image>
              </el-col>
              <el-col :span="18">
                {{ userName }}
              </el-col>
            </el-row>
          </div>
          <div class="person-body">
            <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
              <el-tab-pane label="个人信息" name="personInfo">
                <keep-alive>
                  <PersonInfo v-if="activeTab=='personInfo'"></PersonInfo>
                </keep-alive>
              </el-tab-pane>
              <el-tab-pane label="我的文章" name="personArticles">
                <keep-alive>
                  <PersonArticles v-if="activeTab=='personArticles'"></PersonArticles>
                </keep-alive>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </template>
      <template v-slot:ad-right>
        <h1> </h1>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "../../components/Layout";
import HeadTop from "../../components/HeadTop";

import PersonInfo from './components/PersonInfo';
import PersonArticles from './components/PersonArticles';

export default {
  name: "person",
  props: {
    fit: {
      type: String,
      default: "contain"
    },
    headImgUrl: {
      type: String,
      default: "http://123.com"
    }
  },
  data() {
    return {
        activeTab:'personInfo',
      userName: '',
      activeName: "personInfo",
      tabList: [
        { tabName: "个人信息", tabRouter: "/personInfo" },
        { tabName: "我的文章", tabRouter: "/personArticles" }
      ]
    };
  },
  methods: {
    initHeadInfo() {
      this.fit = "contain";
      this.headImgUrl = "http://123.com";
    },
    handleClick(tab, event) {
      // this.$router.push({path: this.activeName})
    }
  },
  components: {
    Layout,
    HeadTop,
    PersonInfo,
    PersonArticles
  }
};
</script>

<style lang="stylus"></style>
