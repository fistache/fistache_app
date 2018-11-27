import {Entity, float, required, string, unsignedInt} from "@seafood/framework";

export class Product extends Entity {
    @required
    @unsignedInt
    public id;

    @required
    @string
    public name;

    @required
    @float
    public price;
}
