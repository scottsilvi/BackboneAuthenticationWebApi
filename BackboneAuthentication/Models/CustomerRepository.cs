using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackboneAuthentication.Models
{
    public class CustomerRepository : ICustomerRepository
    {
        private List<Customer> customers = new List<Customer>()
        {
                new Customer() { Id= 1, FirstName = "Daniel", LastName = "Coffman" },
                new Customer() { Id = 2, FirstName = "Scott", LastName = "Silvi" }
        };
        public List<Customer> GetAll()
        {
            return customers;
        }


        public Customer Get(int id)
        {
            return customers.Where(e => e.Id == id).Single();
        }
    }
}