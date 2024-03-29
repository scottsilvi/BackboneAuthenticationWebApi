﻿using BackboneAuthentication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;

namespace BackboneAuthentication.Controllers
{
    public class AccountController : ApiController
    {
        // POST api/account
        public bool Post(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                if (Membership.ValidateUser(model.UserName, model.Password))
                {
                    FormsAuthentication.SetAuthCookie(model.UserName, model.RememberMe);
                    return true;
                }

            }
            return false;
        }
    }
}