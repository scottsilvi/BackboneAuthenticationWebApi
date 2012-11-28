using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackboneAuthentication.Models
{
    public class CustomerRepository : ICustomerRepository
    {

        public List<Customer> GetAll()
        {
            return new List<Customer>()
            {
                new Customer() { FirstName = "Daniel", LastName = "Coffman" },
                new Customer() { FirstName = "Scott", LastName = "Silvi" }
            };
        }
    }
}