#Your task is to create functionisDivideBy (or is_divide_by) to check if an
#integer number is divisible by each out of two arguments.

#A few cases:


#(-12, 2, -6)  ->  true
#(-12, 2, -5)  ->  false

def is_divide_by(num, a, b):
    return num % a == 0 and num % b == 0


#Test.describe("Basic Tests")
#Test.it("should pass basic tests")
#Test.assert_equals(is_divide_by(-12, 2, -6), True)
#Test.assert_equals(is_divide_by(-12, 2, -5), False)
