import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Dashboard from '../pages/dashboard.vue'
import Login from '../pages/authentication/login.vue'
import Register from '../pages/authentication/register.vue'
import Ticket from '../pages/ticket/ticket.vue'
import Event from '../pages/events/event.vue'
import AddTicket from '../pages/events/addTicket.vue'
import PostEvent from '../pages/events/postEvent.vue'
import TicketList from '../pages/ticket/ticketList.vue'
import TicketDetail from '../pages/ticket/ticketDetail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Dashboard },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/tiket', component: Ticket },
        { path: '/tiket-list', component: TicketList },
        { path: '/tiket-detail', component: TicketDetail },
        { path: '/event', component: Event },
        { path: '/tambah-tiket', component: AddTicket },
        { path: '/publish-acara', component: PostEvent },
    ]
})

export default router