# vue2-lazy-view

> Vue.js 2.x component level lazy loading solution

## Usage

``` html
<template>
  <div>
    <div class="container">
      <h2>组件都会在3s后加载</h2>
      <VueLazyView :show="show">
        <div class="main">我是内容</div>
      </VueLazyView>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 3000)
  },
}
</script>
<style lang="scss" scoped>
.container {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  .main {
    width: 100px;
    height: 100px;
  }
}
</style>


```

### DEMO <https://algesthesiahunter.github.io/VueLazyView>

### NPM

``` bash
# use npm
npm i vue2-lazy-view -S

# use yarn
yarn add vue2-lazy-view
```

### Import Plugins

``` js
import VueLazyView from 'vue2-lazy-view'
Vue.use(VueLazyView)

```
