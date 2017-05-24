#!/usr/bin/env node

const fetch = require('node-fetch');
const { parse, introspectionQuery, buildClientSchema, printSchema } = require('graphql');

const endpoint = 'http://localhost:4000/graphql';

async function main() {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({query: introspectionQuery})
    });

    const {data, error} = await response.json();
    const schema = buildClientSchema(data);
    console.log(printSchema(schema));
}

main().catch(e => console.error(e));