<template>
  <div class="platform-card">
    <div  v-for="platform in platforms" :key="platform.name" class="platform-content">
      <img :src="`images/${platform.name.toLowerCase()}.svg`"/>
      <img class="mini-icon" :src="`images/${getIcon(platform.has_content)}.svg`">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    platforms: []
  },
  methods: {
    getIcon (isInclude) {
      return isInclude ? 'enabled' : 'disabled'
    }
  }
}
</script>
