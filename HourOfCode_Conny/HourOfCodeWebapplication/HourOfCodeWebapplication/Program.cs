using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace HourOfCodeWebapplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var webhost = new WebHostBuilder()
                                .UseKestrel()
                                .UseIISIntegration()
                                .UseContentRoot(Directory.GetCurrentDirectory())
                                .ConfigureAppConfiguration((context, configBuilder) =>
                                {
                                    configBuilder
                                        .AddCommandLine(args)
                                        .AddJsonFile("appsettings.json")
                                        .AddJsonFile($"appsettings.{context.HostingEnvironment.EnvironmentName}.json", true)
                                        .AddEnvironmentVariables();
                                })
                                .ConfigureLogging((context, loggingBuilder) =>
                                {
                                    loggingBuilder
                                        .AddConfiguration(context.Configuration.GetSection("Logging"))
                                        .AddConsole()
                                        .AddDebug();
                                })
                                .UseStartup<Startup>()
                                .Build();
            webhost.Run();
            //CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
