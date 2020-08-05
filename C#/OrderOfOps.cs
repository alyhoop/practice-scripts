//Ints will always return int, not decimal
int a = 7;
int b = 4;
int c = 3;
int d = (a + b) - 6 * c + (12 * 4) / 3 + 12;
Console.WriteLine(d);
//21
------------------------------------------------------------------------------
int a = 7;
int b = 4;
int c = 3;
int d = (a + b) / c;
int e = (a + b) % c;
Console.WriteLine($"quotient: {d}");
Console.WriteLine($"remainder: {e}");

//  quotient: 3
//  remainder: 2
