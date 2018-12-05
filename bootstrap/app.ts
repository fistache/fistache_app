import {App} from "@seafood/app";
import RootComponent from "../src/View/App.seafood";

const app = new App();
const rootComponent = new RootComponent();

app.setRootComponent(rootComponent);
app.run();
