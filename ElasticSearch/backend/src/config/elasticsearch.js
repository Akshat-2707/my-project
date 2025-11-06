import pkg from "elasticsearch";
const { Client } = pkg;

const client = new Client({
  node: process.env.ELASTICSEARCH_NODE || "http://localhost:9200",
});

export default client;
