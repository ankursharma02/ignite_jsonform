using Apache.Ignite.Core;
using Apache.Ignite.Core.Cache.Configuration;
using Apache.Ignite.Core.Cache.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
   public  class Person
    {
        [QuerySqlField] public string Name { get; set; }
        [QuerySqlField] public int Salary { get; set; }
    }
       public class Create_demo
    {
        static void Main(string[] args)
        {
            try
            {
                var ignite = Ignition.Start();
                var cache = ignite.GetOrCreateCache<int, Person>("personCache2");

                var createQuery = new SqlFieldsQuery("CREATE TABLE City (" +
                    " id LONG PRIMARY KEY, name VARCHAR) " +
                    " WITH \"template=replicated\"");

                //var insertQuery = new SqlFieldsQuery("INSERT INTO Person (_key, Name, Salary) VALUES " +
                //                                   "(11, 'Ariel Atom', 350), " +
                //                                   "(21, 'Reliant Robin', 39)");
                Console.WriteLine("sql query " + createQuery);
                cache.QueryFields(createQuery).GetAll();

             //   var sql = new SqlQuery(typeof(Person), "Salary > ?");

                var cursor = cache.Query(createQuery);

            //    foreach (var cacheEntry in cursor)
              //      Console.WriteLine(cacheEntry.Value);

                Console.WriteLine("sucess");
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
            Console.ReadLine();
        }
    }
}
