<template>
  <div class="name">
    <v-icon class="arrow" name="angle-down"/>
    Запчасти для машин
  </div>
</template>

<script>
//  import Header from './Header.vue'

export default {
  name: 'Category',
//    components: {
//      Header
//    },
}
</script>

<style scoped>
.name {
  text-align: left;
  padding: 1px 0 6px 30px;
  border-bottom: 2px solid #afb1bd;
  color: #656a80;
  font-weight: bold;
  position: relative;
  cursor: pointer;
}

.name:hover {
  color: #5a5d6f;
  border-bottom: 2px solid #5c6073;
}
.name:hover .arrow {
  color: #5a5d6f;
}

.arrow {
  width: 17px;
  height: 26px;
  position: absolute;
  top: 0;
  left: 0;
  color: #656a80;
}
</style>