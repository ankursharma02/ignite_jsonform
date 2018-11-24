using Apache.Ignite.Core.Cache;
using Apache.Ignite.Core.Cache.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Apache.Ignite.Core;

using Apache.Ignite.Core.Cache.Configuration;

using Apache.Ignite.Core.Binary;


namespace ConsoleApp1
{
    class Show_car1
    {
        static void Main(string[] args)
        {
            try
            {
                var ignite = Ignition.Start();
                var queryEntity = new QueryEntity(typeof(int), typeof(Car1));
                var cacheConfig = new CacheConfiguration("cars1", queryEntity);
                ICache<int, Car1> cache = ignite.GetOrCreateCache<int, Car1>(cacheConfig);
                var selQuery = new SqlQuery(typeof(Car1), "SELECT * FROM Car1");
                foreach (ICacheEntry<int, Car1> entry in cache.Query(selQuery))
                    Console.WriteLine(entry + "   ank");
                Console.WriteLine("success");
            }
            catch(Exception e)
            {
                Console.WriteLine(e.StackTrace);
            }
            Console.ReadLine();
            }
    }
}
