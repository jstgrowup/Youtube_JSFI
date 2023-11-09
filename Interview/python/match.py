# a=3
a=int(input("enter your number "))
# match is like switch case only
match a:
    case 1:
        print("case 1")
    case 2:
        print("case 2")
    case 3: 
        print("case 3")
    case 4:
        print("case 4")
    case _:
        # this is a default case
        print("no case found")

