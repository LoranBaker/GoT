using GoTAPI.DTO;
using GoTAPI.Models;
using GoTAPI.Services.AuthService;
using GoTAPI.UserService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace GoTAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }  

        [HttpPost("register")]
         public async Task<ActionResult<User>> Register(UserRegistrationDTO request)
        {
            var response = await _authService.RegisterUser(request);
            return Ok(response);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(UserLoginDTO request)
        {
            var response = await _authService.Login(request);
            if(response.Success)
                return Ok(response);

            return BadRequest(response.Message);
        }

        [HttpGet, Authorize(Roles = "User")]
        public ActionResult<string> AuthorizeUser()
        {
            return Ok("You are authorized");
        }

        [HttpPost("refresh-token")]
        public async Task<ActionResult<string>> RefreshToken()
        {
            var response = await _authService.RefreshToken();
            if (response.Success)
                return Ok(response);

            return BadRequest(response.Message);
        }







    }
}
