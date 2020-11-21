import { gql } from 'apollo-server-express';
import {GraphQLSchema} from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

const furnitureSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`
    enum FurnitureType {
      CHAIR
      BED
      TABLE
      OTHER
    }
    
    type Furniture {
      id: String!
      name: String!
      type: FurnitureType!
      image: String!
      isPublished: Boolean!  
      description: String
      model: String
    }
    
    type Query {
      listAll: [Furniture]!
      listFurnitureByType(type: FurnitureType!): [Furniture]!
      getFurnitureById(id: String!): Furniture!
    }
    
    type Mutation {
      createFurniture(name: String!, type: FurnitureType!, image: String!, description: String): Furniture!
      updateFurniture(id: String!, name: String!, type: FurnitureType!, image: String !, description: String): Furniture!
      deleteFurniture(id: String!): Boolean!
    }
  `
});

export default furnitureSchema;
