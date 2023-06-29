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
client.subscribe('finish-project-status-received', async function ({ task, taskService }) {
  // Put your business logic here
  const project_status_plumber = task.variables.get('project_status_plumber')
  const Is_Plumber_Project_Finished = task.variables.get('Is_Plumber_Project_Finished')
 

  restclient.get('http://localhost:8080/finish-project-status-received/', function (data, response) {

    //var processVariables = new Variables();
    var processVariables = new Variables();

    
    processVariables.set('project_status_plumber', project_status_plumber);
    processVariables.set('Is_Plumber_Project_Finished', Is_Plumber_Project_Finished);
    
    console.log(data)



    taskService.complete(task);
  })


  
});
