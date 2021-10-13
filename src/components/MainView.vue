<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row flex-wrap">
        <div v-for="item in data" :key="item.message" class="col-xs-6 col-md-3 mb-2">
          <CardComponent :item="item" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import NavBar from './NavBar.vue'
import CardComponent from './CardComponent.vue'
import Footer from './Footer.vue'

export default {
  components: {
    NavBar,
    CardComponent,
    Footer
  },
  props: {
    data: []
  }
}
</script>
