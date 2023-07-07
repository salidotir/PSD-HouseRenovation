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
client.subscribe('send-RFQ-to-constructor', async function ({ task, taskService }) {
  // Put your business logic here

  const Is_Electrician_Required = task.variables.get('Is_Plumber_Required')
  const Is_Constructor_Required = task.variables.get('Is_Plumber_Required')
  const Is_Plumber_Required = task.variables.get('Is_Plumber_Required')
 

 

  restclient.get('http://localhost:8080/send-RFQ-to-constructor/', function (data, response) {

    var processVariables = new Variables();

    
    processVariables.set('Request_Status', 'Sended to Constructors');
    
    
    console.log("Brooks was here!")
    console.log(Is_Plumber_Required)
    console.log(Is_Electrician_Required)
    console.log(Is_Constructor_Required)
    console.log("So was me!")

    console.log(data)

    taskService.complete(task, processVariables);
  })

});
