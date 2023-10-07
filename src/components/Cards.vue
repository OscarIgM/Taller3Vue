<template>
  <ul class="list-group">
    <a :href="eventLink">
      <li class="list-group-item">
        <h3>{{ title }}</h3>
        <p>{{ day }} {{ month }} {{ year }}</p>
      </li>
    </a>
  </ul>
</template>

<script>
export default {
  props: {
    eventId: String,
    title: String,
    eventLink: String,
    day: String,
    month: String,
    year: String,
  },
};
</script>
