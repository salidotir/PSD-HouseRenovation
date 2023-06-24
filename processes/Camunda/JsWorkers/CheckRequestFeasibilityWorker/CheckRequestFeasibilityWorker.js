import { Client, logger } from "camunda-external-task-client-js";

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'check-request-feasibility'
client.subscribe("check-request-feasibility", async function({ task, taskService }) {
  // Put your business logic
  var Is_feasible = math.random() >= 0.5;
  const processVariables = new Variables();
  processVariables.set("Is_feasible",Is_feasible);
  // complete the task
  await taskService.complete(task);
});