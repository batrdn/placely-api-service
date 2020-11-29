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
      price: Float!
      count: Int!
      code: String!
      isPublished: Boolean!  
      description: String
      image: String
      models: [String]
    }
    
    type Query {
      listAll: [Furniture]!
      listAllByPublishStatus(isPublished: Boolean!): [Furniture]!
      listFurnitureByType(type: FurnitureType!): [Furniture]!
      getFurnitureById(id: String!): Furniture!
    }
    
    type Mutation {
      createFurniture(name: String!, type: FurnitureType!, code: String!, price: Float!, count: Int!, description: String): Furniture!
      updateFurniture(id: String!, name: String!, type: FurnitureType!, image: String !, description: String): Furniture!
      publish(id: String!, image: String!, models: [String]!): Boolean!
      deleteFurniture(id: String!): Boolean!
    }
  `
});

export default furnitureSchema;
