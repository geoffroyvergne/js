<template>
    <pre class="card card-block card-header">{{ data }}</pre>
</template>
    
<script>
import {DebugService} from '@/service/DebugService';
const debugService = new DebugService();

export default {
  name: 'Test',

  data() {
    return {
      data: {}
    }
  },

  methods: {
    getIndex() {
      debugService.getIndex().then((data) => {
        this.data = data;
      });
    }
  },
  mounted() {
    this.getIndex();
  }
}
    
</script>
