using GoTAPI.DTO;
using GoTAPI.Models;

namespace GoTAPI.Services.AuthService
{
    public interface IAuthService
    {
        Task<User> RegisterUser(UserRegistrationDTO request);
        Task<AuthResponseDto> Login(UserLoginDTO request);
        Task<AuthResponseDto> RefreshToken();
    }
}
