<template>
  <div>
    <Navbar :nombreActivo="'Eventos'" />
    <div v-if="events.length">
      <div v-for="event in events" :key="event.eventId">
        <EventComponent
          :eventId="event.eventId"
          :eventTitle="event.title"
          :eventLink="event.source"
          :eventDay="event.day"
          :eventMonth="event.month"
          :eventYear="event.year"
        ></EventComponent>
      </div>
    </div>
    <div v-else>
      <p>No hay eventos disponibles en este momento.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import EventComponent from "../components/EventComponent.vue";

const events = ref([]);

const getEvents = async () => {
  try {
    const response = await axios.get(`http://3.138.52.135:3000/events`);
    events.value = response.data.events;
  } catch (err) {
    console.error(err);
    console.log("Error ;(");
  }
};

onMounted(() => {
  getEvents();
});
</script>
