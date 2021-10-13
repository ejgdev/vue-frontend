<template>
  <MainView :data="data"/>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faLink, faCamera, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './app.css'

import MainView from './components/MainView.vue'
// eslint-disable-next-line no-unused-vars
import Data from './types/Data'

library.add(faPencilAlt, faLink, faCamera, faVideo)
Vue.component('font-awesome-icon', FontAwesomeIcon)

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
