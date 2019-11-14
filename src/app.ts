// src/app.ts

import Vue from "vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";
// Filter
import VueFilterDateFormat from './utils/dateFilter';
// Register filter
Vue.use(VueFilterDateFormat);

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloDecoratorComponent
    }
});