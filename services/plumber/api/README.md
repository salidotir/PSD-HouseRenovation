## Plumber API

this folder contains the OpenAPI of Plumber service

This company offers a synchronous API to the HRC.

### Quotation:
* The HRC can create a request for quotation to the Plumbing company the Plumbing company can either accept or reject the quotation request. In case they accept the quotation request they offer their quotation by responding with a quotation object. 


### Project:
* In the event that the HRC selects this specific Plumbing company as the winner it can notify the Plumbing company to start their work on the project by creating a new project.
* Once the project is done the Plumbing comapny must inform the HRC comapny through an API exposed by the HRC.