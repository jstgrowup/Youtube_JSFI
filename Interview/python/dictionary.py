a={}
b={}
# dictionary is mutable its just like an object
# empty sets are known as dictionary 
# c=set()
# this is the way to declare an empty set
# print(type(a))
# dict is a key value pair 
b={"good":"something pleasant","fetch":"to fetch bring","1":"the number 1","1":"the number 1"}
print(b["good"])
marks={"harshit":34,"Harry":99,"shivani":99}
print(marks["Harry"])
print(marks["shivani"])
marks["subham"]=100
print("after",marks)
print(marks.get("subham"))
# to get the value of a proper key
# so the square brackets will throw error if the key isnt there whereas the set method wont throw error in get method it will throw None if not found
print(marks.get("subha"))
print(marks.keys())
print(marks.values())
# the keys and values method will return the keys and values in the form of list

