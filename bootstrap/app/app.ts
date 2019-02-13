import { App } from '@fistache/app'
import AppComponent from './app.fistache'

export function createApp(PageComponent: any) {
    const appComponent = new AppComponent()
    const app = new App(appComponent)

    appComponent.use({
        PageComponent
    })

    // Resolve current page, requests and etc.

    return { app }
}
