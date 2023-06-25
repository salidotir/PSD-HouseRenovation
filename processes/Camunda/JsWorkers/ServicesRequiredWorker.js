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
client.subscribe('ServicesRequired', async function ({ task, taskService }) {
    // Put your business logic here

    // Get a process variable
    // const address = task.variables.get('address');


    restclient.get('http://localhost:8080/service-required/', function (data, response) {




        const Is_Plumber_Required = task.variables.get('Is_Plumber_Required');
        const Is_Electrician_Required = task.variables.get('Is_Electrician_Required');
        const Is_Constructor_Required = task.variables.get('Is_Constructor_Required');

        processVariables.set('Is_Plumber_Required', Is_Plumber_Required);
        processVariables.set('Is_Electrician_Required', Is_Electrician_Required);
        processVariables.set('Is_Constructor_Required', Is_Constructor_Required);


        console.log(data);
        taskService.complete(task, processVariables);
    })

});
