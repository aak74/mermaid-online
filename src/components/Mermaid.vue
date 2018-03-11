<template>
  <div class="mermaid">
    <slot />
  </div>
</template>

<script>
import mermaid, {mermaidAPI} from 'mermaid';

export default {
  name: 'Mermaid',
  props: {
    config: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  mounted() {
    
    // mermaid.initialize({startOnLoad:true});
    const defaultConfig = {
      theme: 'default'
    }
    console.log('mounted', mermaid, this.$props.config, Object.assign(defaultConfig, this.$props.config));
    mermaid.initialize(Object.assign(defaultConfig, this.$props.config));
    mermaid.init();
  }

}
</script>
