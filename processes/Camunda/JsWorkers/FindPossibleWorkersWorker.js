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
  restclient.get('http://localhost:8080/find-possible-worker/', function (data, response) {


    var randomNumber = Math.floor(Math.random() * 7);
    const plumber = ["GroupA", "GroupB", "GroupC", "GroupD", "GroupE", "GroupF"]
    const electrician = ["Group1", "Group2", "Group3", "Group4", "Group2", "Group3"]
    const constructor = ["GroupX", "GroupY", "GroupZ", "GroupX1", "GroupY2", "GroupZ3"]

    var list_plumber = plumber.slice(0, randomNumber);
    var list_constructor = constructor.slice(0, randomNumber);
    var list_electrician = electrician.slice(0, randomNumber);

    const listWorkers = [list_plumber,list_constructor ,list_electrician]

    // Complete the task
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
