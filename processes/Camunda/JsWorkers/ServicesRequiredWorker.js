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
    var list_Workers = task.variables.get('list_Workers', listWorkers);
    var list_plumber = task.variables.get('list_plumber', list_plumber);
    var list_electrician = task.variables.get('list_electrician', list_electrician);
    var list_constructor = task.variables.get('list_constructor', list_constructor);

    restclient.get('http://localhost:8080/service-required/', function (data, response) {

        if (list_plumber.length > 3)
            processVariables.set('list_plumber', list_plumber);
        if (list_electrician.length > 3)
            processVariables.set('list_electrician', list_electrician);
        if (list_constructor.length > 3)
            processVariables.set('list_constructor', list_constructor);


        console.log(data);
        console.log('list_plumber' + list_plumber);
        console.log('list_electrician' + list_electrician);
        console.log('list_constructor' + list_constructor);

        taskService.complete(task, processVariables);
    })

});
