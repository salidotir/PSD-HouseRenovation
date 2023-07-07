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
client.subscribe('send-request-for-quotation-to-plumber', async function ({ task, taskService }) {
    // Put your business logic here
    // Get a process variable
    const id = task.variables.get('id');
    const address = task.variables.get('address');
    const startdate = task.variables.get('startdate');
    const duration = task.variables.get('duration');
    const budget = task.variables.get('budget');
    // const address = task.variables.get('address');
    // var list_plumber = task.variables.get('list_plumber', list_plumber);

    const Is_Electrician_Required = task.variables.get('Is_Plumber_Required')
    const Is_Constructor_Required = task.variables.get('Is_Plumber_Required')
    const Is_Plumber_Required = task.variables.get('Is_Plumber_Required')
   


    restclient.get('http://localhost:8080/send-request-for-quotation-to-plumber/', function (data, response) {




        console.log('Request for quotation sent to plumber.')
        console.log(data)

        console.log("Brooks was here!")
        console.log(Is_Plumber_Required)
        console.log(Is_Electrician_Required)
        console.log(Is_Constructor_Required)
        console.log("So was me!")


        taskService.complete(task);
    })

});
