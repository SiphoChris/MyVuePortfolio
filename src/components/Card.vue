<template>
  <div class="card m-auto">
    <slot name="CardImage"></slot>
    <div class="card-body">
        <slot name="CardBody">
        </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card{
  width: 18rem;
  height: 400px;
}
</style>
