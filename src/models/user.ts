import { __Type } from "graphql";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class User {
    @Field(__Type => ID)
    id:string

    @Field()
    name:string;
}