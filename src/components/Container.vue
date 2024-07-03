<template>
    <div class="wrapper">
      <slot name="content"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContainerComp',
  };
  </script>
  
  <style scoped>
  .wrapper {
    border: 1px solid #ddd;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  