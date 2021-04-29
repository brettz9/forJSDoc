<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <button @click="getSelectOptions"></button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layout: (vm) => vm.$route.meta.layout || 'DefaultLayout',
  },
  methods: {
    /**
     * Отправляет поисковой запрос селекта и получает список опций для селекта.
     *
     * @param {string} searchQuery - Поисковой запрос селекта.
     * @param {string} queryName - Название поискового запроса селекта из searchGroups.
     */
    getSelectOptions(searchQuery, queryName) {
      if (searchQuery.length === 3) {
        const query = this.$apollo.queries[queryName];

        query.setVariables({ name: searchQuery.toUpperCase() });
        query.skip = false;
      }
    },
  }
};
</script>
