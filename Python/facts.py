# Interpreted language-reads & executes immediately
# Indentation is IMPORTANT - turn OFF TABS!
# use four spaces (atom automatically uses spaces on .py files)
#
# put try blocks around dangerous sections of code


smallest = None
print("Before:", smallest)
for itervar in [3, 41, 12, 9, 74, 15]:
    if smallest is None or itervar < smallest:
        smallest = itervar
        break
    print("Loop:", itervar, smallest)
print("Smallest:", smallest)

#line 13 is wrong
