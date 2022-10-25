import { Router } from "./router.js";

const router = new Router()
router.add('/', "pages/home/home.html")
router.add('/universe', "pages/universe/universe.html")
router.add('/exploration', "pages/exploration/exploration.html")
router.add(404, "pages/404/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()