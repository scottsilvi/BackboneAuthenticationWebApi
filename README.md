BackboneAuthenticationWebApi
============================

Authentication sample using .NET WebApi w/ Backbone.js

Authentication Information
-------------------------

By default, I'm using the localdb that is created by default when using the Microsoft Universal Providers. I then used the ASP.NET Web Configuration tool to quickly create a sample user to test.

Credentials: 
```Username: sample
Password: Sample1 
Role: "Customer"
```

The purpose of this app is to allow developers to secure Api endpoints with the [Authorize] attribute, regardless of if the request derives from a user-driven action on a web-front end, or via a raw API call by a 3rd party request.

Authentication via the webapp is handled by the /api/account endpoint (Controllers.AccountController, POST method), using an HTTP Post request, which calls the membership providers ValidateUser method to validate credentials. If successful, it creates the AuthCookie as normal. 

Authentication via http request is handled by a custom Message Handler(CustomHandlers.BasicAuthenticationMessageHandler). This method parses the Authorization header for username/password. It then calls the membership providers ValidateUser method. If successful, it creates a new Identity & Principal and attaches it to the current HttpContext.

With both authentication scenarios now covered, you can now decorate your API endpoints with the [Authorize] attribute. Head over to the Controllers.SampleController and check out the two Get Methods.

The first returns all Customers. Maybe this is something you only want to expose to Adminstrators, but you want to allow customers to request a single instance of Customer, based on Id (yes I know, this is flawed logic, it's simply an example!). 

If you head to the webform (authenticate if you're not already), and click the get button (with no value in the Id input), you will receive a 401 unauthorized, as expected (as this was attempting to hit the IEnumerable Get method). If you enter an Id of 1 or 2, the console will show the data. If you enter an invalid ID, you get a 500 server error (as I'm returning .Single() in my query). 

Enjoy!