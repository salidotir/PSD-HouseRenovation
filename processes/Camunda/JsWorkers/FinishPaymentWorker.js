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
client.subscribe('finish-payment', async function ({ task, taskService }) {
  // Put your business logic here

 

  restclient.get('http://localhost:8080/finish-payment/', function (data, response) {

    var processVariables = new Variables();

    
    processVariables.set('PaymentStatus', 'DONE');
    console.log(data)



    taskService.complete(task, processVariables);
  })

});
