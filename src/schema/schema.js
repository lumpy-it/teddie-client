import GraphQLBridge from 'uniforms/GraphQLBridge';
import { parse, buildASTSchema } from 'graphql';
import { GraphQLNonNull } from 'graphql';

const schema = `
type Doctrine {
   id: String!
   name: String!
   slug: String!
   category: String!
   tags: [String]
   public: Boolean!
   description: String
   roles: [Role]
}
type Role {
  name: String!
  sortingKey: Int!
  ships: [ShipEntry]
}
type ShipEntry {
  ship: Ship!
  sortingKey: Int!
  public: Boolean!
  count: String
  comment: String
}
type Ship {
  id: String!
  name: String!
  shipTypeID: Int!
  shipTypeName: String!
}

# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
   doctrines: [Doctrine]    # "[]" means this is a list of channels
   doctrine(id: ID): Doctrine
}

type Mutation {
  addDoctrine(name: String!, slug: String!, category: String! ): Doctrine
}
`;

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function generateLabels(type) {
    let data = {};
    let fields = type.getFields();
    for (let field in fields) {
        if (fields.hasOwnProperty(field)) {
            data[fields[field].name] = {label: capitalize(fields[field].name)}
        }
    }
    return data;
}

function requiredFieldMap(type) {
    let required = {};
    
    let fields = type.getFields();
    for (let field in fields) {
        if (fields.hasOwnProperty(field)) {
            if (fields[field].type instanceof GraphQLNonNull) {
                required[fields[field].name] = true;
            }
        }
    }
    return required;
}

function requiredValidator(requiredMap) {
    return function(model) {
        let details = [];
        for (let field in requiredMap) {
            if (!model[field]) {
                details.push({name: field, message: `${field} is required!`});
            }
        }
        if (details.length) {
            throw {details};
        }
    }
}

const astSchema = buildASTSchema(parse(schema));
console.log(astSchema);
const schemaType = astSchema.getType('Doctrine');

const schemaData = generateLabels(schemaType);
const schemaValidator = requiredValidator(requiredFieldMap(schemaType));

const bridge = new GraphQLBridge(schemaType, schemaValidator, schemaData);

export default bridge;