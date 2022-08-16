using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HostelsController : ControllerBase
    {
        private readonly DataContext _context;

        public HostelsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult Get()
        {
            var result = _context.Hostels;
            return Ok(result);
        }

        [HttpGet("{id}")]
        public ActionResult GetById(int id)
        {
            var result = _context.Hostels.FirstOrDefault(p => p.Id == id);
            return Ok(result);
        }
    }
}
