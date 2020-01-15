<template>
  <div class="notes">
    <div class="note" :class="{ full: !grid, yellow: note.priority == 'Warm', red: note.priority == 'Hot' }"
         v-for="note in notesFilter" :key="note.id">
      <div class="note-header">
        <input type="text" v-if="note.edit" @keyup.enter="changeNote(note)" @keyup.esc="note.edit = false"
               v-model.lazy="note.title" v-focus>
        <p @click="note.edit = true" v-if="!note.edit">{{ note.title }}</p>
        <p style="cursor: pointer" @click="removeNote(note.id)">X</p>
      </div>
      <priority v-if="note.edit" />
      <div class="note-body">
        <textarea v-if="note.edit" v-model="note.descr" @keyup.enter="changeNote(note)"
                  @keyup.esc="note.edit = false"></textarea>
        <p v-if="!note.edit">{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import priority from '@/components/Priority.vue';

export default {
  components: { priority },
  props: {
    grid: {
      type: Boolean,
      required: true,
    },
    search: {
      type: String,
    },
  },
  data() {
    return {
      edit: false,
    };
  },
  computed: {
    notesFilter() {
      let base = this.$store.getters.getNotes;
      let searchA = this.search;

      if (searchA === '') return base;

      searchA = searchA.trim().toLowerCase();

      // eslint-disable-next-line array-callback-return,consistent-return
      base = base.filter((item) => {
        if (item.title.toLowerCase().indexOf(searchA) !== -1) return item;
      });

      return base;
    },
  },
  methods: {
    changeNote(e) {
      e.edit = false;
      e.date = new Date(Date.now()).toLocaleString();
      e.priority = this.$store.getters.getPriority;
      this.$store.dispatch('updateNote', e);
    },
    removeNote(id) {
      const base = this.$store.getters.getNotes;
      base.forEach((e, index) => {
        if (e.id === id) { this.$store.dispatch('removeNote', index); }
      });
    },
  },
  created() {
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style lang="scss">
  .notes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0;
  }

  .note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: white;

    &.full {
      width: 100%;
      text-align: center;
    }

    &.yellow {
      background-color: rgba(255, 255, 0, 0.2);
    }

    &.red {
      background-color: rgba(255, 0, 0, 0.2);
    }
  }

  .note-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: #144ed2;

    h1 {
      font-size: 32px;
    }

    svg {
      margin-right: 12px;
      color: #999999;
      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }

      &.active {
        color: #144ed2;
      }
    }
  }

  .note-body {
    p {
      margin: 20px 0;
    }

    span {
      font-size: 12.5px;
      color: #999999;
    }
  }
</style>
