<template>
  <ul class="list-group">
    <a :href="eventLink">
      <li class="list-group-item">
        <h3>{{ eventTitle }}</h3>
        <p>{{ eventDay }} {{ eventMonth }} {{ eventYear }}</p>
      </li>
    </a>
  </ul>
</template>

<script>
export default {
  props: {
    eventId: String,
    eventTitle: String,
    eventLink: String,
    eventDay: String,
    eventMonth: String,
    eventYear: String,
  },
};
</script>
