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
client.subscribe('find-possible-workers', async function ({ task, taskService }) {
  console.log('In Find Possible Workers');
  // Put your business logic here

  // Get a process variable
  // const address = task.variables.get('address');
  // const startdate = task.variables.get('startdate');
  // const duration = task.variables.get('duration');
  // const budget = task.variables.get('budget');

  //restclient.get('http://localhost:8080/check-request-feasibility/' + address + startdate + duration + budget, function (data, response) {
  restclient.get('http://localhost:8080/find-possible-workers/', function (data, response) {



    var randomNumber1 = Math.floor(Math.random() * 6);
    randomNumber1 = randomNumber1 ==0 ? 1 : randomNumber1;


    //Is_Plumber_Required
    var processVariables = new Variables();


    const plumber = ["P_GroupA", "P_GroupB", "P_GroupC", "P_GroupD", "P_GroupE", "P_GroupF"];
    //var Is_Plumber_Required = randomNumber1 > 3 ? true : false;
    const Is_Plumber_Required = true;
    console.log("Is_Plumber_Required: " + Is_Plumber_Required);

    const electrician = ["E_Group1", "E_Group2", "E_Group3", "E_Group4", "E_Group2", "E_Group3"]
    //var Is_Electrician_Required = randomNumber2 > 3 ? true : false;
    const Is_Electrician_Required = true;
    console.log("Is_Electrician_Required: " + Is_Electrician_Required);

    const constructor = ["C_GroupX", "C_GroupY", "C_GroupZ", "C_GroupX1", "C_GroupY2", "C_GroupZ3"]
    //var Is_Constructor_Required = randomNumber3 > 3 ? true : false;
    const Is_Constructor_Required = false;
    console.log("Is_Constructor_Required: " + Is_Constructor_Required);



    const list_plumber = plumber.slice(0, randomNumber1);
    const list_constructor = constructor.slice(0, randomNumber1);
    const list_electrician = electrician.slice(0, randomNumber1);

    const listWorkers = [list_plumber, list_constructor, list_electrician]

    //Complete the task

    processVariables.set('Is_Plumber_Required', Is_Plumber_Required);
    processVariables.set('Is_Electrician_Required', Is_Electrician_Required);
    processVariables.set('Is_Constructor_Required', Is_Constructor_Required);


    processVariables.set('list_Workers', listWorkers);
    processVariables.set('list_plumber', list_plumber);
    processVariables.set('list_electrician', list_electrician);
    processVariables.set('list_constructor', list_constructor);

    console.log(listWorkers);
    console.log(data);
    taskService.complete(task, processVariables);
  })

});
//✖️ couldn't complete task efc8bf56-1356-11ee-b6e2-0242ac110002, EngineError: Response code 500 (); Error: Unknown property used in expression: ${Plumber}. Cause: Cannot resolve identifier 'Plumber'; Type: ProcessEngineException; Code: 0
