using System;

namespace GettingInput
{
  class Program
  {
    static void Main()
    {
      Console.WriteLine("How old are you?");
      string input = Console.ReadLine();
      Console.WriteLine($"You are {input} years old!");
    }
  }
}


/*
$ dotnet run
How old are you?
25
You are 100 years old!
$
 */
