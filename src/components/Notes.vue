<template>
  <div class="notes">
    <div class="note" :class="{ full: !grid, yellow: note.priority == 'Warm', red: note.priority == 'Hot' }"
         v-for="(note, index) in notes" :key="index">
      <div class="note-header">
        <input type="text" v-if="note.edit" @keyup.enter="note.edit = false, note.date = new Date(Date.now()).toLocaleString()" @keyup.esc="note.edit = false"
               v-model.lazy="note.title" v-focus>
        <p @click="note.edit = true" v-if="!note.edit">{{ note.title }}</p>
        <p style="cursor: pointer" @click="removeNote(index)">X</p>
      </div>
      <div class="priority" v-if="note.edit">
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
      <div class="note-body">
        <textarea v-if="note.edit" v-model.lazy="note.descr" @keyup.enter="note.edit = false, note.date = new Date(Date.now()).toLocaleString()"
                  @keyup.esc="note.edit = false"></textarea>
        <p v-if="!note.edit">{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notes',
  props: {
    notes: {
      type: Array,
      required: true,
    },
    grid: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    removeNote(index) {
      // console.log(`Note id - ${index} removed`);
      this.$emit('remove', index);
    },
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
