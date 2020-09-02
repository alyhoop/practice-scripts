# illegal naming:
# 2my-first_name = "John"
#legal
myfirst_name = "John"

#multi-variable naming
x = y = z = "Orange"

#global variables
#either declared outside of function, or use global keyword

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)
