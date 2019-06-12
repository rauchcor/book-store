using Swashbuckle.Application;
using System;
using System.IO;
using System.Reflection;
using System.Web.Http;

namespace WebApi
{
    public class SwaggerConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var thisAssembly = typeof(SwaggerConfig).Assembly;

            config
                .EnableSwagger(c =>
                    {
                        c.SingleApiVersion("v1", "Cars Web Api");
                        
                        // If you annotate Controllers and API Types with
                        // Xml comments (http://msdn.microsoft.com/en-us/library/b2s063f7(v=vs.110).aspx), you can incorporate
                        // those comments into the generated docs and UI. You can enable this by providing the path to one or
                        // more Xml comment files.
                        //
                        c.DescribeAllEnumsAsStrings();
                        c.IncludeXmlComments(GetXmlCommentsPath());
                    })
                .EnableSwaggerUi();
        }
        private static string GetXmlCommentsPath()
        {
            var baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
            var commentsFileName = string.Format("{0}.XML", Assembly.GetExecutingAssembly().GetName().Name);
            var binFilePath = Path.Combine(baseDirectory, "bin");
            var commentsFilePath = Path.Combine(binFilePath, commentsFileName);

            return commentsFilePath;
        }
    }
}
