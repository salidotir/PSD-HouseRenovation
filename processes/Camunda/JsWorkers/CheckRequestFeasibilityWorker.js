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


  //restclient.get('http://localhost:8080/check-request-feasibility/' + address + startdate + duration + budget, function (data, response) {
  restclient.get('http://localhost:8080/check-request-feasibility/', function (data, response) {




    var Is_feasible = Math.floor(Math.random() * 101) % 2 ? true : false;

    console.log("Is_feasible: " + Is_feasible);

    //Is_feasible
    var processVariables = new Variables();
    processVariables.set('Is_feasible', Is_feasible);

    var randomNumber = Math.floor(Math.random() * 5);
    var id = ["1", "2", "3", "4", "5"];
    var addresses = ["Garibaldi", "Centrale", "Loreto", "Piola", "Cadorna"];
    var startdates = ["2023/06/30", "2023/07/05", "2023/07/10", "2023/07/15", "2023/07/20"];
    var duration = ["5days", "10days", "15days", "20days", "25days"];
    var budgets = ["2000€", "3000€", "4000€", "5000€", "6000€"];


    processVariables.set('id', id[randomNumber]);
    processVariables.set('address', addresses[randomNumber]);
    processVariables.set('startdate', startdates[randomNumber]);
    processVariables.set('duration', duration[randomNumber]);
    processVariables.set('budget', budgets[randomNumber]);

    // Complete the task
    console.log(data);

    open('https://docs.camunda.org/get-started/quick-start/success');
    
    taskService.complete(task, processVariables);
  })

});
