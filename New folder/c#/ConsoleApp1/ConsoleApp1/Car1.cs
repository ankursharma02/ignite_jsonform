using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Apache.Ignite.Core;
using Apache.Ignite.Core.Cache;
using Apache.Ignite.Core.Cache.Configuration;
using Apache.Ignite.Core.Cache.Query;
using Apache.Ignite.Core.Binary;

namespace ConsoleApp1
{
    class Car1
    {
        [QuerySqlField] public string Model { get; set; }
        [QuerySqlField] public int Power { get; set; }

       
        static void Main(string[] args)
        {

            try
            {
                var ignite = Ignition.Start();
                // Конфигурируем кэш для работы с SQL:
                var queryEntity = new QueryEntity(typeof(int), typeof(Car1));
                var cacheConfig = new CacheConfiguration("cars1", queryEntity);
                ICache<int, Car1> cache = ignite.GetOrCreateCache<int, Car1>(cacheConfig);

                // Вставка данных (_key - предопределённое поле):
                var insertQuery = new SqlFieldsQuery("INSERT INTO Car1 (_key, Model, Power) VALUES " +
                                                "(11, 'Ariel Atom', 350), " +
                                                "(21, 'Reliant Robin', 39)");
                Console.WriteLine("sql query " + insertQuery);
             //   cache.QueryFields(insertQuery).GetAll();

                // Запрос данных:
                //    var selQuery = new SqlQuery(typeof(Car1), "SELECT * FROM Car1");
                //  foreach (ICacheEntry<int, Car1> entry in cache.Query(selQuery))
                //    Console.WriteLine(entry.+"   ank");

                //  cache = ignite.GetCache<long,Car1>("cacheConfig");
                SqlQuery sql = new SqlQuery(typeof(Car1), "SELECT * FROM Car1");
                
                    foreach (ICacheEntry<int, Car1> e in cache.Query(sql))
                        Console.WriteLine(e.ToString());

                    Console.WriteLine("Success");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.StackTrace);
            }
            Console.ReadLine();
        }
    }
}