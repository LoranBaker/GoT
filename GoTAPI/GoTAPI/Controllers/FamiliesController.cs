using GoTAPI.Data;
using GoTAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoTAPI.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class FamiliesController : ControllerBase
        {

            private readonly DataContext _context;

        public FamiliesController(DataContext context)
        {
                _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Families>>> GetFamilies()
            {
                return Ok(await _context.Families.ToListAsync());
            }

        [HttpPost]
        public async Task<ActionResult<List<Families>>> CreateFamilies(Families families)
            {
                _context.Families.Add(families);
                await _context.SaveChangesAsync();

                return Ok(await _context.Families.ToListAsync());
            }

        [HttpPut]
        public async Task<ActionResult<List<Families>>> UpdateFamilies(Families families)
        {
            var dbFamilies = await _context.Families.FindAsync(families.Id);
            if (dbFamilies == null)
                return BadRequest("Families not found");

            dbFamilies.Naziv = families.Naziv;
            dbFamilies.Predstavnik = families.Predstavnik;
            dbFamilies.Grb = families.Grb;

            await _context.SaveChangesAsync();

            return Ok(await _context.Families.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Families>>> DeleteFamilies(int id)
        {
            var dbFamilies = await _context.Families.FindAsync(id);
            if (dbFamilies == null)
                return BadRequest("Families not found");

            _context.Families.Remove(dbFamilies);
            await _context.SaveChangesAsync();

            return Ok(await _context.Families.ToListAsync());
        }

    }
}
