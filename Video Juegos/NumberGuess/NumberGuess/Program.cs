using System;

namespace NumberGuess
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Number Guess");

            Console.WriteLine("Guess a Number(1 to 10):");

            Random rnd = new Random();
            int number = rnd.Next(1, 11);

            int guess;
            bool valid;
            while (true)
            {
                valid = Int32.TryParse(Console.ReadLine(), out guess);
                if (valid) if (guess == number)
                    { Console.WriteLine("You Win"); return; };
                if (!valid)
                {
                    Console.WriteLine("Invalid input, try again");
                    continue;
                }
                if (guess < number)
                    Console.WriteLine("too low, please try again");
                else
                    Console.WriteLine("too high, please try again");
            }
        }
    }
}
