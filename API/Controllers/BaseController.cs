using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController:ControllerBase
    {
        //mediatr objecti butun controllerler terefinden istifade edileceyini gore
        //singleton kimi dusunule biler ve burdada biz yoclayiriq eger evvelceden bu
        //obyekt yaradilibsa ondan istifade edirik yoxsa yenisini isteyirik
        private IMediator _metiator;
        protected IMediator Mediator => _metiator ?? (_metiator = HttpContext.RequestServices.GetService<IMediator>());
    }
}