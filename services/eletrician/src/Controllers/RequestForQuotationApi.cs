/*
 * AwsomeElectricians
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
using AwsomeElectricians.Attributes;

using Microsoft.AspNetCore.Authorization;
using AwsomeElectricians.Models;

namespace AwsomeElectricians.Controllers
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
        /// <remarks>A HRC can sends a request for editing the request for quoation with specific id via this API. AwsomeElectricians return whether the request was deleted or exception happened.</remarks>
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

            return Ok($"Request with Id {id} deleted successfully");
        }

        /// <summary>
        /// Recives a request for editing the quotation request with specific id from a HRC company and responds whether the request was submitted or not
        /// </summary>
        /// <remarks>A HRC can sends a request for editing the request for quoation with specific id  via this API. AwsomeElectricians return whether the request was submitted or an exception happened.</remarks>
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
        [SwaggerOperation("EditQuotationPUT")]
        public virtual IActionResult EditQuotationPUT([FromQuery][Required()]int? quotationRequestId, [FromQuery][Required()]string address, [FromQuery][Required()]string startDate, [FromQuery][Required()]int? duration, [FromQuery][Required()]decimal? budget)
        {
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200);

            //TODO: Uncomment the next line to return response 404 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(404);

            //TODO: Uncomment the next line to return response 0 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(0);

            return Ok(($"Data Modified Successfuly \n{quotationRequestId} \n{address} \n{startDate} \n{duration} \n{budget}").ToString());
        }

        /// <summary>
        /// Recives a new request for quotation from a HRC company and responds whether the request was submitted or not
        /// </summary>
        /// <remarks>A HRC can sends a request for quoation via this API. AwsomeElectricians return whether the request was submitted or an exception happened.</remarks>
        /// <param name="address">Address of the property</param>
        /// <param name="startDate">Start Date</param>
        /// <param name="duration">Duration in days</param>
        /// <param name="budget">Max budget in Euroes</param>
        /// <response code="201">Request submitted successfuly.</response>
        /// <response code="0">Exception happened!</response>
        [HttpPost]
        [Route("/v1/NewRequestForQuotation")]
        [ValidateModelState]
        [SwaggerOperation("NewQuotationRequestPOST")]
        public virtual IActionResult NewQuotationRequestPOST([FromQuery][Required()]string address, [FromQuery][Required()]string startDate, [FromQuery][Required()]int? duration, [FromQuery][Required()]decimal? budget)
        {
            //TODO: Uncomment the next line to return response 201 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(201);

            //TODO: Uncomment the next line to return response 0 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(0);

            return Ok(($"Data Inserted Successfuly \n{address} \n{startDate} \n{duration} \n{budget}").ToString());
        }
    }
}
