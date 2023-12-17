<template>
  <div class="home-page">
    <swiper :imageList="imageList" />
  </div>
  
</template>
<script>
import swiper from '../components/swiper.vue';
import image1 from '../assets/images/scenery-1.jpeg'
import image2 from '../assets/images/scenery-2.jpeg'
import image3 from '../assets/images/scenery-3.jpg'
import image4 from '../assets/images/scenery-4.jpeg'
import image5 from '../assets/images/scenery-5.jpg'
import image6 from '../assets/images/scenery-6.jpg'

export default {
  components: {
    swiper
  },
  data () {
    return {
      imageList: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
      ]
    }
  },
  mounted () {
  }
}
</script>