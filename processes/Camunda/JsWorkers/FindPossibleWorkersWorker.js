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
client.subscribe('find-possible-worker', async function ({ task, taskService }) {
  // Put your business logic here

  // Get a process variable
  // const address = task.variables.get('address');
  // const startdate = task.variables.get('startdate');
  // const duration = task.variables.get('duration');
  // const budget = task.variables.get('budget');

  //restclient.get('http://localhost:8080/check-request-feasibility/' + address + startdate + duration + budget, function (data, response) {
  restclient.get('http://localhost:8080/find-possible-worker/', function (data, response) {



    var randomNumber1 = Math.floor(Math.random() * 7);
    var randomNumber2 = Math.floor(Math.random() * 7);
    var randomNumber3 = Math.floor(Math.random() * 7);


    //Is_feasible
    var processVariables = new Variables();


    const plumber = ["GroupA", "GroupB", "GroupC", "GroupD", "GroupE", "GroupF"];
    //var Is_Plumber_Required = randomNumber1 > 3 ? true : false;
    var Is_Plumber_Required = true;
    console.log("Is_Plumber_Required: " + Is_Plumber_Required);

    const electrician = ["Group1", "Group2", "Group3", "Group4", "Group2", "Group3"]
    //var Is_Electrician_Required = randomNumber2 > 3 ? true : false;
    var Is_Electrician_Required = true;
    console.log("Is_Electrician_Required: " + Is_Electrician_Required);

    const constructor = ["GroupX", "GroupY", "GroupZ", "GroupX1", "GroupY2", "GroupZ3"]
    //var Is_Constructor_Required = randomNumber3 > 3 ? true : false;
    var Is_Constructor_Required = true;
    console.log("Is_Constructor_Required: " + Is_Constructor_Required);


    
    var list_plumber = plumber.slice(0, randomNumber1);
    var list_constructor = constructor.slice(0, randomNumber2);
    var list_electrician = electrician.slice(0, randomNumber3);

    const listWorkers = [list_plumber, list_constructor, list_electrician]

    //Complete the task

    processVariables.set('Is_Plumber_Required', Is_Plumber_Required);
    processVariables.set('Is_Electrician_Required', Is_Electrician_Required);
    processVariables.set('Is_Constructor_Required', Is_Constructor_Required);

    console.log(data);
    console.log(listWorkers);
    var processVariables = new Variables();
    processVariables.set('list_Workers', listWorkers);
    processVariables.set('list_plumber', list_plumber);
    processVariables.set('list_electrician', list_electrician);
    processVariables.set('list_constructor', list_constructor);

    taskService.complete(task, processVariables);
  })

});
