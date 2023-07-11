## Electrician API

this folder contains the OpenAPI of the electrician service

This company offers an asynchronous API to the HRC, in turn, the HRC also offers an asynchronous API to this company.

### Quotation:
* The HRC can create a request for quotation to the Electrician company. 
* The Electrician company then has to decide and prepare a quotation containing their offer and submit it through an API given by the HRC company. 
* The Householder can send, edit or withdraw(delete) a request to HRC before a quotation is issued.

### Project:
* In the event that the HRC selects this specific Electrician company as the winner, it can notify the Electrician company to start their work on the project by creating a new project.
* Once the project is done the Electrician company must inform the HRC company through an API exposed by the HRC.
