<template>
  <div class="comments">
    <BaseH1 class="comments__title">Комментарии</BaseH1>
    <Message v-if="comments.length == 0">Комментарий: 0</Message>
    <TableComments>
      <tbody class="table__body" slot="tbody">
        <tr
          v-for="(comment, index) in comments"
          :key="comment.id"
          class="table__body-row"
        >
          <td class="table__body-item">{{ comment.name }}</td>
          <td class="table__body-item">{{ comment.text }}</td>
          <td class="table__body-item">{{ comment.publish }}</td>
          <td class="table__body-item">
            <span @click="changeStatus(comment)">Изменить статус</span>
          </td>
          <td class="table__body-item">
            <span @click="onDelete(comment.id, index)">Удалить</span>
          </td>
        </tr>
      </tbody>
    </TableComments>
  </div>
</template>

<script>
import TableComments from "@/components/admin/TableComments";

export default {
  layout: "admin",
  middleware: ["auth"],
  components: { TableComments },
  async asyncData({ $axios }) {
    let comments = [];
    await $axios
      .get(
        `https://blog-nuxt-js-a2cd0-default-rtdb.firebaseio.com/comments.json`
      )
      .then(res => {
        Object.keys(res.data).forEach(key => {
          const comment = res.data[key];
          comments.push({ ...comment, id: key });
        });
      })
      .catch(e => {
        console.log(e);
      });
    return { comments };
  },
  data() {
    return {
      comments: null
    };
  },
  methods: {
    changeStatus(comment) {
      comment.publish = !comment.publish;
      this.$axios.put(
        `https://blog-nuxt-js-a2cd0-default-rtdb.firebaseio.com/comments/${comment.id}.json`,
        comment
      );
    },
    onDelete(id, index) {
      this.comments.splice(index, 1);
      this.$axios.delete(
        `https://blog-nuxt-js-a2cd0-default-rtdb.firebaseio.com/comments/${id}.json`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  &__body {
    font-size: 16px;
  }

  &__body-row {
    background: #ffffff;
    border-radius: 10px;
  }

  &__body-item {
    padding: 32px 30px 29px 30px;

    &:first-child {
      border-radius: 10px 0px 0px 10px;
    }

    &:last-child {
      border-radius: 0px 10px 10px 0px;
    }

    span {
      cursor: pointer;
      color: #4339f2;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
