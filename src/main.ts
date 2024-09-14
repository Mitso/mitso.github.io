import { createApp } from 'vue'
import './assets/styles/css/style.css'
import App from './App.vue'

/*
    a) Vue instance 
        - Argument is the single file component root template
*/
const rootComponentInstance = createApp(App)

console.log(rootComponentInstance)
rootComponentInstance.mount('#app')

/*
    1. Create API server 
        API talks to databases statefull application 
            Test DB e.g. REMOTE DB Firebase or LOCAL DB (any) ie. MongoDB, MySQL, Postgres, Mongoose or GraphQL?
    2. Create a DB

    Postgress Port No. 5432

*/
