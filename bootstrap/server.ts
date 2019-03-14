import {router} from '@fistache/router'
import routes from '../src/Routes'
import {createApp} from './app/app'
import notFoundPage from '../src/View/Pages/404.fistache'

router.setNotFoundPage(notFoundPage)
router.addRoutes(routes)

export default () => {
    return new Promise((resolve: any, reject: any) => {
        router.done(async () => {
            const { app } = createApp(router.getCurrentPage())

            try {
                await router.fetchCurrentPage()
            } catch (e) {
                reject(e)
            }

            resolve(app)
        })
    })
}
