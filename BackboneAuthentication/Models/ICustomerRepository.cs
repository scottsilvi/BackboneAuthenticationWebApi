using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackboneAuthentication.Models
{
    public interface ICustomerRepository
    {
        List<Customer> GetAll();
    }
}