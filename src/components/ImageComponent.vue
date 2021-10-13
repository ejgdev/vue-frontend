<template>
  <div class="img-container">
    <img v-if="thumbnail_url" :src="thumbnail_url" alt="product image">
    <img v-else src="http://via.placeholder.com/640x420" alt="no image">
    <div class="btn custom-badge">
      <span v-if="format=='IMAGE' || format=='VIDEO'">{{ selected }} / {{ total }} Selected&nbsp;</span>
      <font-awesome-icon v-if="format === 'IMAGE'" icon="camera" />
      <font-awesome-icon v-if="format === 'VIDEO'" icon="video" />
      <font-awesome-icon v-if="format === 'TEXT'" icon="pencil-alt" />
      <font-awesome-icon v-if="format === 'URL'" icon="link" />
    </div>
  </div>
</template>
<script>

export default {
  props: {
    thumbnail_url: String,
    format: String,
    selected: Number,
    total: Number
  }
}
</script>
