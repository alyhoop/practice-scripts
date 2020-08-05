//Range is even greater than double

decimal min = decimal.MinValue;
decimal max = decimal.MaxValue;
Console.WriteLine($"The range of the decimal type is {min} to {max}");
//The range of the decimal type is -79228162514264337593543950335 to
// 79228162514264337593543950335
------------------------------------------------------------------------------
double a = 1.0;
double b = 3.0;
Console.WriteLine(a / b);

decimal c = 1.0M;
decimal d = 3.0M;
Console.WriteLine(c / d);
/* 
.333333333333333
0.3333333333333333333333333333
*/
