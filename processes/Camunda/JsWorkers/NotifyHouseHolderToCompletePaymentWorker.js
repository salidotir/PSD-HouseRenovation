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
client.subscribe('inform-project-finished-to-householder', async function ({ task, taskService }) {
  // Put your business logic here
  const Is_Electrician_Project_Finished   = task.variables.get('Is_Electrician_Project_Finished')
  const Is_Constructor_Project_Finished   = task.variables.get('Is_Constructor_Project_Finished')
  const Is_Plumber_Project_Finished   = task.variables.get('Is_Plumber_Project_Finished')

  const Is_Electrician_Required = task.variables.get('Is_Plumber_Required')
  const Is_Constructor_Required = task.variables.get('Is_Plumber_Required')
  const Is_Plumber_Required = task.variables.get('Is_Plumber_Required')
 
 

  restclient.get('http://localhost:8080/inform-project-finished-to-householder/', function (data, response) {

    //var processVariables = new Variables();
    var processVariables = new Variables();

    
    // processVariables.set('project_status_plumber', project_status_plumber);
    // processVariables.set('Is_Plumber_Project_Finished', Is_Plumber_Project_Finished);

    console.log("Brooks was here!")
    console.log(Is_Plumber_Required)
    console.log(Is_Electrician_Required)
    console.log(Is_Constructor_Required)
    console.log("So was me!")
    console.log(Is_Plumber_Project_Finished)
    console.log(Is_Electrician_Project_Finished)
    console.log(Is_Constructor_Project_Finished)
    console.log("City of stars shining for YOU!")


    console.log(data)

    if ((Is_Constructor_Required==true && Is_Constructor_Project_Finished!=true) || (Is_Electrician_Required==true && Is_Electrician_Project_Finished!=true) || (Is_Plumber_Required==true && Is_Plumber_Project_Finished!=true))
    {
        //Project is not finished 
    }
    else
    {  
      taskService.complete(task);
    }



  })


});
