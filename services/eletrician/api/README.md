## Electrician API

this folder contains the OpenAPI of electrician service

This company offers an asynchronous API to the HRC, in turn the HRC also offers an asynchronous API to this company.

### Quotation:
* The HRC can create a request for quotation to the Electrical company. 
* The Electrical company then has to decide and prepare a quotation containg their offer and submit it through an API given by the HRC company. 
* The HRC can edit or withdraw(delete) their request for quotation before the Electrician company offers their quotation.

### Project:
* In the event that the HRC selects this specific Constructing company as the winner it can notify the Constructing to company to start their work on the project by creating a new project.
* Once the project is done the Electrician comapny must inform the HRC comapny through an API exposed by the HRC.