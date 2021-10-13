<template>
  <div class="thumbnail">
    <ImageComponent
      :thumbnail_url="item.thumbnail_url"
      :format="item.format"
      :selected="item.selected_assets"
      :total="item.total_assets"
    />
    <div class="caption">
      {{ item.message }}
    </div>
    <PlatFormComponent :platforms="item.platforms" />
  </div>
</template>
<script>
import ImageComponent from './ImageComponent.vue'
import PlatFormComponent from './PlatFormComponent.vue'
export default {
  components: { ImageComponent, PlatFormComponent },
  props: {
    item: {}
  }
}
</script>
