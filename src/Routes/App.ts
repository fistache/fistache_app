import { Router } from '@fistache/router'

export default (router: Router) => {
    router.bind('/', () => import('../View/Pages/Index.fistache'))
}
