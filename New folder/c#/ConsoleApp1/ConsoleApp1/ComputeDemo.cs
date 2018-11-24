using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Apache.Ignite.Core;
using Apache.Ignite.Core.Cache;
using Apache.Ignite.Core.Compute;

namespace ConsoleApp1
{
    public class demo1
    {
        public static void Compute()
        {
            using (var ignite = Ignition.Start())
            {
                var funcs = "Count characters using callable".Split(' ')
                  .Select(word => new ComputeFunc { Word = word });

                ICollection<int> res = ignite.GetCompute().Call(funcs);

                var sum = res.Sum();

                Console.WriteLine(">>> Total number of characters in the phrase is '{0}'.", sum);
                Console.WriteLine("word  is  ->"+res);
            }
        }
    }
    public class ComputeFunc : IComputeFunc<int>
    {
        public string Word { get; set; }

        public int Invoke()
        {
            Console.WriteLine("word  is  ->" +Word);
            return Word.Length;
        }
    }

    public class ComputeDemo
    {
        static void Main(string[] args)
        {
            demo1.Compute();
            Console.ReadLine();
        }
    }
}
