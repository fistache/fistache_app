import {Script} from "@seafood/framework";
import {injectable} from "inversify";

@injectable()
export class ProjectScript extends Script {
    /**
     * Create a new script instance.
     */
    constructor() {
        super();
    }

    /**
     * Execute the console script.
     *
     * @return void
     */
    public handle() {
        //
    }
}
