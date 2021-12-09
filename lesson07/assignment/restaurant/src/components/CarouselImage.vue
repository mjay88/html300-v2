
<template>
<!--probably could have done this without component in Home.vue file...-->
  <div class="carousel-item">
    <img class="d-block w-100 img-fluid mx-auto rounded" v-bind:src="img" v-bind:alt="alt"  />
  </div>
</template>



<script>
import { imageBorder } from "../mixins/imageBorder";


export default {
 
  name: "CarouselImage",
  props: {
      img : String,
      alt: String,
        
  },
  mixins: [imageBorder],
};
</script>