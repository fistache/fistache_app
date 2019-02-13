import {router} from '@fistache/router'
import {createApp} from './app/app'
import routes from '../src/Routes'

// todo: do not render once again, just bind to existing nodes

router.addRoutes(routes)
router.done(() => {
    const { app } = createApp(router.getCurrentPage())
    const element = document.getElementById('app') as Element

    /// #if DEV
    app.useStyles()
    app.run(element)
    /// #endif

    /// #if PROD
    app.replace(element)
    /// #endif
})
