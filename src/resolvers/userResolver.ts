import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../models/user";
import crypto from "crypto"

@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User]) // [User] , pq eu vou retornar uma lista
  async users() {
    return this.data;
  }
  
  @Mutation(() => User) // Return User Class
  async createUser(@Arg("name") name: string) // Reciving Atributes, and typing  
   {
    const user = { id: crypto.randomUUID(), name }; // Creating User
    this.data.push(user); // Pushing to array data
    return user; // Returning user datas
  }
}
