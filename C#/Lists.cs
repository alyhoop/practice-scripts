var names = new List<string> { "Aly", "Ana", "Felipe" };
foreach (var name in names)
{
  Console.WriteLine($"Hello {name.ToUpper()}!");
}

//Hello ALY!
// Hello ANA!
// Hello FELIPE!
------------------------------------------------------------------------------
var names = new List<string> { "Aly", "Ana", "Felipe" };
foreach (var name in names)
{
  Console.WriteLine($"Hello {name.ToLower()}!");
}
/*
Hello aly!
Hello ana!
Hello felipe!
 */
------------------------------------------------------------------------------
