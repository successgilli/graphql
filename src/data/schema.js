import { makeExecutableSchema } from 'graphql-tools'

import {resolvers} from './resolvers'

const typeDefs = `
type Contact {
    firstName: String
    lastName: String
}

type Alien {
    firstName: String
    lastName: String
    planet: String
}

input InputContact {
    id: ID
    firstName: String
    lastName: String
}

    type Friend {
        id: ID,
        firstName: String,
        lastName: String,
        email: String,
        gender: Gender,
        contacts: [Contact]
        language: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }
    input inputFriend {
        id: ID,
        firstName: String,
        lastName: String,
        email: String,
        gender: Gender,
        contacts: [InputContact]
        language: String
    }
    type Mutation {
        createFriend(input: inputFriend): Friend
        updateFriend(input: inputFriend): Friend
        deleteFriend(id: String): String
    }

    type Query {
        getFriend(id: ID): Friend
        getAliens: [Alien]
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers })

export { schema };
