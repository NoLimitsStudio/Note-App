<template>
  <div class="wrapper">

    <!--    <header></header>-->

    <div class="content-wrapper">
      <section>
        <div class="container">
          <message v-if="message" :message="message"/>

          <!-- new note -->
          <new-note />

          <div class="note-header">
            <!-- title-->
            <h1> {{ title }} </h1>

            <search :value="search" placeholder="Find your note" @search="search = $event" />

            <!-- icons-->
            <div class="icons">
              <!-- eslint-disable-next-line -->
              <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <!-- eslint-disable-next-line -->
              <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <!-- note list -->
          <notes :grid="grid" :search="search"/>
        </div>
      </section>
    </div>


    <!--    <footer></footer>-->

  </div>
</template>

<script>
import message from '@/components/Message.vue';
import newNote from '@/components/NewNote.vue';
import notes from '@/components/Notes.vue';
import search from './components/Search.vue';

export default {
  components: {
    search, message, newNote, notes,
  },
  data() {
    return {
      message: null,
      title: 'Notes App',
      search: '',
      grid: true,
    };
  },
  methods: {
  },
};
</script>

<style>

</style>
