import {createApp} from './app/app'

export default (context: any) => {
    return new Promise((resolve: any, reject: any) => {
        const { app } = createApp()

        // todo: resolve async requests

        resolve(app)
    })
}
