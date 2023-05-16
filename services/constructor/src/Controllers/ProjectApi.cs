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
using AwsomeElectricians.Attributes;

using Microsoft.AspNetCore.Authorization;
using AwsomeConstructor.Models;

namespace AwsomeConstructor.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    [ApiController]
    public class ProjectApiController : ControllerBase
    { 
        /// <summary>
        /// Gets completion status of the project
        /// </summary>
        /// <remarks>The HRC company can check wether the project is completed or not.</remarks>
        /// <param name="id">Id of the quotation request</param>
        /// <response code="200">Ok</response>
        /// <response code="0">Exception happened!</response>
        [HttpGet]
        [Route("/v1/Project/{id}")]
        [ValidateModelState]
        [SwaggerOperation("ProjectCompletionStatusIdGET")]
        [SwaggerResponse(statusCode: 200, type: typeof(bool?), description: "Ok")]
        public virtual IActionResult ProjectCompletionStatusIdGET([FromRoute][Required]int? id)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(bool?));

            //TODO: Uncomment the next line to return response 0 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(0);
            string exampleJson = null;
            exampleJson = "true";
            
                        var example = exampleJson != null
                        ? JsonConvert.DeserializeObject<bool?>(exampleJson)
                        : default(bool?);            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// Request to start the project
        /// </summary>
        /// <remarks>In the event that a HRC decides AwsomeContructor as the winner, the HRC informs PlumberBrothersto start working on the project.</remarks>
        /// <param name="body">RequestForQuotation</param>
        /// <response code="200">ok</response>
        /// <response code="0">Exception happened!</response>
        [HttpPost]
        [Route("/v1/Project")]
        [ValidateModelState]
        [SwaggerOperation("ProjectPOST")]
        public virtual IActionResult ProjectPOST([FromBody]Project body)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200);

            //TODO: Uncomment the next line to return response 0 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(0);

            throw new NotImplementedException();
        }
    }
}
