using Apache.Ignite.Core;
using Apache.Ignite.Core.Cache.Configuration;
using Apache.Ignite.Core.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Client_computdemo
    {
      //  private static object ignite;

        static void Main(string[] args)
        {
            try
            {
                var cfg = new IgniteConfiguration
                {
                    CacheConfiguration = new[]
        {
        new CacheConfiguration
        {
            CacheMode = CacheMode.Partitioned,
            Backups = 0
        }
    }
                };
                Console.WriteLine("Success");
                Console.ReadLine();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

    }
}
