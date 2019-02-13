import { Router } from '@fistache/app'

export default (router: Router) => {
    router.bind('/workshop', () => import(
            '../View/Pages/Workshop.fistache'
        )
    )
}
