import { Router } from '@fistache/router'

export default (router: Router) => {
    router.bind('/workshop', () => import('../../View/Pages/Workshop.fistache'))
}
