<template>
  <MainView :data="data"/>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

import MainView from './components/MainView.vue'
// eslint-disable-next-line no-unused-vars
import Data from './types/Data'

export default Vue.extend({
  components: { MainView },
  data () {
    return {
      data: [] as Data[]
    }
  },
  mounted () {
    axios
      .get<Data[]>('/json/question1.json')
      .then(response => (this.data = response.data))
  }
})
</script>
