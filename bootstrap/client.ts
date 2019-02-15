import {router} from '@fistache/router'
import routes from '../src/Routes'
import {createApp} from './app/app'

// todo: do not render once again, just bind to existing nodes

/// #if DEV
import notFoundPage from '../src/View/Pages/404.fistache'
router.setNotFoundPage(notFoundPage)
/// #endif

router.addRoutes(routes)
router.done(async () => {
    const { app } = createApp(router.getCurrentPage())
    const element = document.getElementById('app') as Element

    /// #if DEV
    await router.fetchCurrentPage()

    app.useStyles()
    app.run(element)
    /// #endif

    /// #if PROD
    app.replace(element)
    /// #endif
})
