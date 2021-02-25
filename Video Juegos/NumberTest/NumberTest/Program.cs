using System;

namespace NumberTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            int i = 17;
            float x = 17.0f;
            float y = 17.0f;
            Console.WriteLine("i={0},x={1},y={2}", i, x, y);

            i = i + 1;
            x = x * 2;
            y = y / 3.0f;
            Console.WriteLine("i={0},x={1},y={2}", i, x, y);

            double z;
            i = 17 % 12; // remainder function
            x = (float)i + 3.0f; // casting an integer to a float
            z = Math.Sqrt(2.0); // square root of 2
            y = 1.0f / (float)Math.Sin(Math.PI * 0.25); // sqrt(2)
            Console.WriteLine("i={0},x={1},y={2},z={3}", i, x, y, z);
        }
    }
}
