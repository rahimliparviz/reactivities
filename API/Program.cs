using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
           var host = CreateHostBuilder(args).Build();

            //burda biz proqram her defe ise salindiqda eger deabasa yradilmayibla
            //movcud migrationlar esasinda databasa yaradilir ve migratiolar tedbiq edilir
            //eger db varsa o zaman yenede sonuncu yeni migrationlar tedbiq edilir
           using (var scope = host.Services.CreateScope())
           {
               var services = scope.ServiceProvider;
               try
               { //buda biz dependency injection vasitesile DataContex
               //servisini cagirib onu istifade edirik
                    var context = services.GetRequiredService<DataContext>();
                    context.Database.Migrate();    
              
               }
               catch (System.Exception ex)
               {
                  var logger = services.GetRequiredService<ILogger<Program>>();
                  logger.LogError(ex,"An error occured during migration");

               }
           }
           host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>Host.CreateDefaultBuilder(args).ConfigureWebHostDefaults(webBuilder =>{ webBuilder.UseStartup<Startup>();});
    }
}
