<template>
  <div class="about">
    <h1>This is Test page</h1>

    <b-alert show>Default Alert</b-alert>

    <TestComponent/>
  </div>
</template>

<script>
import TestComponent from '@/components/TestComponent.vue'

export default {
  name: 'test',
  components: {
    TestComponent
  }
}

</script>