<template>
  <div id="app">
    <mermaid 
      :config="ganttConfig"
    >
      {{ diagram1 }}
    </mermaid>
    <mermaid>
      sequenceDiagram
        Alice->>Bob: Hello Bob, how are you?
        Bob-->>Alice: Great!
    </mermaid>
  </div>
</template>

<script>

import Mermaid from "./components/Mermaid";

export default {
  name: 'app',
  components : {
    Mermaid
  },
  computed: {
    diagram1 () {
      return `
        gantt
          dateFormat  YYYY-MM-DD
          title Roadmap
          Cогласование				    :active, ct, 2018-03-15, 1w
          section Variant 1
          Contractor 1 		        :crit, active, yar14, after ct, 14w
          Contractor 2         		:crit, active, after ct, 2w
          Testing           			:crit, after yar14, 7d
          section Variant 2
          Contractor 1         		:crit, active, yar, after ct, 7w
          Contractor 2         		:crit, active, after ct, 7w
          Testing           			:crit, after yar, 7d
      `
    },
    ganttConfig () {
      return {
        theme: 'forest',
        gantt: { axisFormatter: [
          ['%d.%m', (d) => {
            return d.getDay() === 1
          }]
        ]}
      }
    }    
  }
}
</script>
