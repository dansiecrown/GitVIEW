<template>
  <div>
    <h1>{{ repo.name }}</h1>
  </div>
</template>

<script>
import store from '../store/store'
export default {
  data() {
    return {
      repo: store.state.repo
    }
  }
}
</script>
