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
client.subscribe('check-request-feasibility', async function ({ task, taskService }) {
  // Put your business logic here

  // Get a process variable
  // const address = task.variables.get('address');
  // const startdate = task.variables.get('startdate');
  // const duration = task.variables.get('duration');
  // const budget = task.variables.get('budget');

  //restclient.get('http://localhost:8080/check-request-feasibility/' + address + startdate + duration + budget, function (data, response) {
  restclient.get('http://localhost:8080/check-request-feasibility/', function (data, response) {

    var randomNumber = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
    var Is_feasible = randomNumber % 2 ? true : false;

    console.log("Is_feasible: " + Is_feasible);

    //Is_feasible
    var processVariables = new Variables();
    processVariables.set('Is_feasible', Is_feasible);

    // Complete the task
    console.log(data);
    taskService.complete(task, processVariables);
  })

});
