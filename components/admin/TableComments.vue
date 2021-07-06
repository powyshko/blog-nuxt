<template>
  <table class="comments__table table">
    <thead class="table__head">
      <tr class="table__head-row">
        <th class="table__head-item">Имя</th>
        <th class="table__head-item">Текст</th>
        <th class="table__head-item">Статус</th>
        <th class="table__head-item">Изменить Статус</th>
        <th class="table__head-item">Удалить</th>
      </tr>
    </thead>
    <!-- Slot -->
    <slot name="tbody"></slot>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    thead: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 14px;

  &__head {
    font-size: 22px;
    text-align: left;
    font-weight: bold;
  }

  &__head-row {
  }

  &__head-item {
    padding: 32px 30px 29px 30px;
  }
}
</style>
