<template>
  <b-card
    v-if="data"
    text-variant="center"
    class="card card-congratulations"
  >
    <!-- images -->
    <b-img
      :src="require('@/assets/images/elements/decore-left.png')"
      class="congratulations-img-left"
    />
    <b-img
      :src="require('@/assets/images/elements/decore-right.png')"
      class="congratulations-img-right"
    />
    <!--/ images -->

    <b-avatar
      variant="primary" 
      size="70"
      class="shadow mb-2"
    >
      <feather-icon
        size="30"
        icon="FramerIcon"
      />
    </b-avatar>
    <h1 class="mb-1 mt-50 text-white">
      Hello {{ userData.username }},
    </h1>
    <b-card-text class="m-auto w-75">
      You are the <strong>{{ data.role }} </strong>. Feel free to exercise your authority.
    </b-card-text>
  </b-card>
</template>

<script>
import {
  BCard, BImg, BAvatar, BCardText,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BAvatar,
    BImg,
    BCardText,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData'))
    }
  }
}
</script>
