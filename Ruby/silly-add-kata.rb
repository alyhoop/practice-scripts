#For this Kata you will have to forget how to add two numbers together.

#The best explanation on what to do for this kata is this meme:
#  224
# +234
#---------
#  4416


def silly_add(n1, n2)
  return n1+n2 if n1*n2 == 0
  d1, m1 = n1.divmod(10)
  d2, m2 = n2.divmod(10)
  m3 = m1+m2
  mult = m3 > 9 ? 100 : 10
  mult*silly_add(d1, d2)+m3
end



Test.assert_equals(silly_add(2, 11), 13)
Test.assert_equals(silly_add(0, 1), 1)
Test.assert_equals(silly_add(0, 0), 0)
Test.assert_equals(silly_add(16, 18), 214)
Test.assert_equals(silly_add(26, 39), 515)
Test.assert_equals(silly_add(122, 81), 1103)
