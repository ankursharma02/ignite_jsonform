using Apache.Ignite.Core;
using Apache.Ignite.Core.Cache.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Zerodepl
    {
        static void Main(string[] args)
        {
            var ignite = Ignition.Start();
            var cache = ignite.GetOrCreateCache<int,Person>("personCache");

            var sql = new SqlQuery(typeof(Person), "Salary > ?");

            var cursor = cache.Query(sql);

            foreach (var cacheEntry in cursor)
                Console.WriteLine(cacheEntry.Value);

        }
    }
}
