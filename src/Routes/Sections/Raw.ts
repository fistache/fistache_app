import { Router } from '@fistache/router'

export default (router: Router) => {
    router
        .bind('/recipes/{id}-{alias}', () => import('../../View/Pages/Recipe.fistache'))
        // .name('recipe')
}
