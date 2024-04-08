import './bootstrap';
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

import { createApp } from 'vue/dist/vue.esm-bundler';
import Test from './components/Test.vue';
import Clients from './components/Clients.vue'; // Import the Client.vue component
import PersonalAccessTokens from './components/PersonalAccessTokens.vue'; // Import the Client.vue component
import AuthorizedClients from './components/AuthorizedClients.vue'; // Import the Client.vue component

const app = createApp({});

// Mount both App and Client components
app.component('clients', Clients); // Register the Client component
app.component('personal-access-token', PersonalAccessTokens); // Register the Client component
app.component('authorized-clients', AuthorizedClients); // Register the Client component
app.mount('#app');
