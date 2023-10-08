import neo4j from 'neo4j-driver';

const neo4jUri = process.env.NEO4J_URI ? process.env.NEO4J_URI: ''
const neo4jUser = process.env.NEO4J_USERNAME? process.env.NEO4J_USERNAME: ''// Change this to your Neo4j username
const neo4jPassword = process.env.NEO4J_PASSWORD? process.env.NEO4J_PASSWORD: ''; // Change this to your Neo4j password

console.log(neo4jUri)
console.log(neo4jUser)
console.log(neo4jPassword)

const driver = neo4j.driver('neo4j+s://7993aec7.databases.neo4j.io', neo4j.auth.basic(neo4jUser, neo4jPassword));

console.log(neo4jUri)
console.log(neo4jUser)
console.log(neo4jPassword)

const session = driver.session();

export default session;