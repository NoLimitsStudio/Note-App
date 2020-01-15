<template>
  <div class="new-note">
    <label>Title</label>
    <input v-model="note.title" type="text">
    <label>Priority</label>
    <priority @prioritySet="note.priority = $event" />
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
import priority from '@/components/Priority.vue';

export default {
  components: { priority },
  data() {
    return {
      note: {
        id: null,
        title: '',
        descr: '',
        date: '',
        edit: false,
        priority: '',
      },
    };
  },
  methods: {
    addNote() {
      const date = new Date(Date.now()).toLocaleString();
      this.note.priority = this.$store.getters.getPriority;
      this.note.date = date;
      this.note.id = this.$store.getters.getId;
      this.$store.dispatch('addNote', this.note);
      this.note = {
        title: '',
        descr: '',
        date: '',
        edit: false,
        priority: '',
      };
      this.$store.dispatch('setPriority', 'Standart');
    },
  },
};
</script>

<style lang="scss">
  .new-note {
    text-align: center;
    margin-bottom: 25px;
  }
</style>
