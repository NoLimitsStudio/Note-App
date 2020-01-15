<template>
  <div class="priority">
      <label v-for="type in types" :key="type">
        <input type="radio" name="priority" :value="type" v-model="priority" @change="changePriority"> {{ type }}
      </label>
    </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['Standart', 'Warm', 'Hot'],
      priority: 'Standart',
    };
  },
  methods: {
    changePriority() {
      this.$store.dispatch('setPriority', this.priority);
    },
  },
  created() {
    // eslint-disable-next-line no-return-assign
    this.$store.subscribe(setPriority => this.priority = setPriority.payload);
  },

  // this.priority = this.$store.getters.getPriority;

};
</script>

<style lang="scss" scoped>
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
