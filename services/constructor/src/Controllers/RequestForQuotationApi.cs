/*
 * AwsomeConstructorCompany
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using Swashbuckle.AspNetCore.SwaggerGen;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using AwsomeConstructor.Attributes;

using Microsoft.AspNetCore.Authorization;
using AwsomeConstructor.Models;

namespace AwsomeConstructor.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    [ApiController]
    public class RequestForQuotationApiController : ControllerBase
    { 
        /// <summary>
        /// Recives a request for deleting the quotation request with specific id from a HRC company and responds whether the quoation was deleted or exception happened.
        /// </summary>
        /// <remarks>A HRC can sends a request for editing the request for quoation with specific id via this API. AwsomeConstructor return whether the request was deleted or exception happened.</remarks>
        /// <param name="id">Id of the quotation request</param>
        /// <response code="200">delete successfuly</response>
        /// <response code="404">Resource not found</response>
        /// <response code="0">Exception happened!</response>
        [HttpDelete]
        [Route("/v1/DeleteRequestForQuotation/{id}")]
        [ValidateModelState]
        [SwaggerOperation("DeleteRequestForQuotationIdDELETE")]
        public virtual IActionResult DeleteRequestForQuotationIdDELETE([FromRoute][Required]int? id)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200);

            //TODO: Uncomment the next line to return response 404 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(404);

            //TODO: Uncomment the next line to return response 0 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(0);

            throw new NotImplementedException();
        }

        /// <summary>
        /// Recives a request for editing the quotation request with specific id from a HRC company and responds whether the request was submitted or not
        /// </summary>
        /// <remarks>A HRC can sends a request for editing the request for quoation with specific id  via this API. AwsomeConstructor return whether the request was submitted or an exception happened.</remarks>
        /// <param name="quotationRequestId">Id of the quotation request</param>
        /// <param name="address">Address of the property</param>
        /// <param name="startDate">Start Date</param>
        /// <param name="duration">Duration in days</param>
        /// <param name="budget">Max budget in Euroes</param>
        /// <response code="200">Changes applied successfuly</response>
        /// <response code="404">Resource not found</response>
        /// <response code="0">Exception happened!</response>
        [HttpPut]
        [Route("/v1/EditRequestForQuotation")]
        [ValidateModelState]
        [SwaggerOperation("EditRequestForQuotationPUT")]
        public virtual IActionResult EditRequestForQuotationPUT([FromQuery][Required()]int? quotationRequestId, [FromQuery][Required()]string address, [FromQuery][Required()]string startDate, [FromQuery][Required()]int? duration, [FromQuery][Required()]decimal? budget)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200);

            //TODO: Uncomment the next line to return response 404 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(404);

            //TODO: Uncomment the next line to return response 0 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(0);

            throw new NotImplementedException();
        }

        /// <summary>
        /// Recives a request for offering the quotation of the request for quotaion with specific id from a HRC company and responds with the Quotation.
        /// </summary>
        /// <remarks>A HRC can sends a request for offering the Qutation of the request for quoation with specific id via this API. AwsomeConstructor responds with the Quotation.</remarks>
        /// <param name="id">Id of the quotation request</param>
        /// <response code="200">Quotation</response>
        /// <response code="202">Quotation not ready yet</response>
        /// <response code="0">Exception happened!</response>
        [HttpGet]
        [Route("/v1/GetQuotation/{id}")]
        [ValidateModelState]
        [SwaggerOperation("GetQuotationIdGET")]
        [SwaggerResponse(statusCode: 200, type: typeof(Quotation), description: "Quotation")]
        public virtual IActionResult GetQuotationIdGET([FromRoute][Required]int? id)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(Quotation));

            //TODO: Uncomment the next line to return response 202 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(202);

            //TODO: Uncomment the next line to return response 0 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(0);
            string exampleJson = null;
            exampleJson = "{\n  \"duration\" : 10,\n  \"servicePrice\" : 1000,\n  \"id\" : 10,\n  \"startDate\" : \"11/10/2023\"\n}";
            
                        var example = exampleJson != null
                        ? JsonConvert.DeserializeObject<Quotation>(exampleJson)
                        : default(Quotation);            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// Recives a new request for quoation from a HRC company and responds whether the request was submitted or not
        /// </summary>
        /// <remarks>A HRC can sends a request for quoation via this API. AwsomeConstructor return whether the request was submitted or an exception happened.</remarks>
        /// <param name="address">Address of the property</param>
        /// <param name="startDate">Start Date</param>
        /// <param name="duration">Duration in days</param>
        /// <param name="budget">Max budget in Euroes</param>
        /// <response code="201">Request submitted successfuly.</response>
        /// <response code="0">Exception happened!</response>
        [HttpPost]
        [Route("/v1/NewRequestForQuotation")]
        [ValidateModelState]
        [SwaggerOperation("NewRequestForQuotationPOST")]
        public virtual IActionResult NewRequestForQuotationPOST([FromQuery][Required()]string address, [FromQuery][Required()]string startDate, [FromQuery][Required()]int? duration, [FromQuery][Required()]decimal? budget)
        { 
            //TODO: Uncomment the next line to return response 201 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(201);

            //TODO: Uncomment the next line to return response 0 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(0);

            throw new NotImplementedException();
        }
    }
}
