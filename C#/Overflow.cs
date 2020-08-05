int max = int.MaxValue;
int min = int.MinValue;
Console.WriteLine($"The range of integers is {min} to {max}");

int what = max + 3;
Console.WriteLine($"An example of overflow: {what}");
-------------------------------------------------------------------------------
//The range of integers is -2147483648 to 2147483647
//An example of overflow: -2147483646
