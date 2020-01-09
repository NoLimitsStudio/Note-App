<template>
  <div class="new-note">
    <label for="">Title</label>
    <input v-model="note.title" type="text">
    <label for="">Priority</label>
    <div class="priority">
      <label>
        <input type="radio" name="priority" value="Standart" v-model="note.priority"> Standart
      </label>
      <label>
        <input type="radio" name="priority" value="Warm" v-model="note.priority"> Warm
      </label>
      <label>
        <input type="radio" name="priority" value="Hot" v-model="note.priority"> Hot
      </label>
    </div>
    <label for="">Description</label>
    <textarea v-model="note.descr"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addNote() {
      return this.$emit('newNote', this.note);
    },
  },
};
</script>

<style lang="scss">
  .new-note {
    text-align: center;
    margin-bottom: 25px;
  }

  .priority {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 25px;

    label {
      margin-right: 25px;
    }

    input[type=radio] {
      margin-bottom: 0;
      width: auto;
    }
  }
</style>
