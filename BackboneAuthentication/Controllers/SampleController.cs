using BackboneAuthentication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;

namespace BackboneAuthentication.Controllers
{
    public class SampleController : ApiController
    {
        CustomerRepository cr = new CustomerRepository();
        // GET api/values

        [Authorize(Roles="Administrator")]
        public IEnumerable<Customer> Get()
        {
            return cr.GetAll();
        }

        [Authorize(Roles = "Customer, Administrator")]
        public Customer Get(int id)
        {
            return cr.Get(id);
        }
    }
}
