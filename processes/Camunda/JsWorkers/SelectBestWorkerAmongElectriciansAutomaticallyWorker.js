import { Client, logger } from 'camunda-external-task-client-js';
import { Variables } from "camunda-external-task-client-js";

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
//  - 'asyncResponseTimeout': long polling timeout (then a new request will be issued)
const config = { baseUrl: 'http://localhost:8080/engine-rest', use: logger, asyncResponseTimeout: 10000 };

// create a Client instance with custom configuration
const client = new Client(config);

import { Client as RESTClient } from 'node-rest-client';
var restclient = new RESTClient();

// susbscribe to the topic: 'charge-card'
client.subscribe('select-electrician-winner', async function ({ task, taskService }) {
  // Put your business logic here

 const list_electrician = task.variables.get('list_electrician');

  restclient.get('http://localhost:8080/select-electrician-winner/', function (data, response) {

    var processVariables = new Variables();

    
    processVariables.set('winner electrician', list_electrician[0]);
    console.log(data)



    taskService.complete(task, processVariables);
  })

});
