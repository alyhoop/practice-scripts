function even_or_odd(number) {
  if (number % 2 === 0)
    return "Even";
  else
    return "Odd";
}

/*
Test.assertEquals(even_or_odd(2), "Even")
Test.assertEquals(even_or_odd(0), "Even")
Test.assertEquals(even_or_odd(7), "Odd")
Test.assertEquals(even_or_odd(1), "Odd")
 */
