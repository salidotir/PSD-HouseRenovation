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
client.subscribe('send-second-RFQ-to-constructor', async function ({ task, taskService }) {
  // Put your business logic here

  // Get a process variable
  const id = task.variables.get('id');
  const address = task.variables.get('address');
  const startdate = task.variables.get('startdate');
  const duration = task.variables.get('duration');
  const budget = task.variables.get('budget');
  // const address = task.variables.get('address');
  var list_constructor = task.variables.get('list_constructor');

  restclient.get('http://localhost:8080/send-second-RFQ-to-constructor/', function (data, response) {

    var processVariables = new Variables();


    processVariables.set('Request_Status', 'Sended to Constructors Again');
    const random = Math.floor(Math.random() * 101) % 2 ? true : false;
    processVariables.set('Quotation_Recieved', random);


    console.log(data)

    console.log(data);
    console.log('id:' + id);
    console.log('address:' + address);
    console.log('startdate:' + startdate);
    console.log('duration:' + duration);
    console.log('budget:' + budget);

    var durations = ["50days", "100days", "150days", "200days", "250days"];
    var budgets = ["21000€", "31000€", "41000€", "51000€", "61000€"];
    var randomNumber = Math.floor(Math.random() * 5);

    processVariables.set('new duration', durations[randomNumber]);
    processVariables.set('new budget', budgets[randomNumber]);

    taskService.complete(task, processVariables);
  })

});


//send-second-RFQ-to-constructor