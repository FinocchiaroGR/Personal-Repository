using System;

namespace RandomTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rnd = new System.Random();
            int randomnumber = rnd.Next(1, 10);
            Console.WriteLine("randomnumber = {0}", randomnumber);

            double randomdouble = rnd.NextDouble();
            Console.WriteLine("randomdouble = {0}", randomdouble);
        }
    }
}
