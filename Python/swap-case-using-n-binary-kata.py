#Your job is to change the given string s using a non-negative integer n.

#Each bit in n will specify whether or not to swap the case for each alphabetic
#character in s: if the bit is 1, swap the case; if its 0, leave it as is. When
#you finished with the last bit of n, start again with the first bit.

#You should skip the checking of bits when a non-alphabetic character is
# encountered, but they should be preserved in their original positions.

#Examples
#swap('Hello world!', 11)  -->  'heLLO wORLd!'

def swap(s,n):
    bin_str = "{0:b}".format(n)
    s_list  = list(s)
    out     = []
    i       = 0

    for l in s_list:
        if (not l.isalpha()):
            i = i - 1
            out.append(l)
        elif (bin_str[i % len(bin_str)] == '0'):
            out.append(l)
        else:
            if l.isupper():
                out.append(l.lower())
            else:
                out.append(l.upper())
        i = i + 1

    return ''.join(out)

#Test
def basic_tests():
    test.assert_equals(swap('Hello world!', 11), 'heLLO wORLd!')
    test.assert_equals(swap('the quick broWn fox leapt over the fence',9),'The QUicK BrowN foX LeaPT ovER thE FenCE')
    test.assert_equals(swap('eVerybody likes ice cReam',85),'EVErYbODy LiKeS IcE creAM')
    test.assert_equals(swap('gOOd MOrniNg',7864),'GooD MorNIng')
    test.assert_equals(swap('how are you today?',12345),'HOw are yoU TOdaY?')

@test.it('Edge Cases')
def edge_case_tests():
    test.assert_equals(swap('the lord of the rings', 0), 'the lord of the rings')
    test.assert_equals(swap('',11345),'')
