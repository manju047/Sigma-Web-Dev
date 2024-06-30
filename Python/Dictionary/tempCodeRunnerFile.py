dict = {
  "brand": "TATA",
  "model": "NANO",
  "year": 1964
}
mydict = dict.copy()
print("copy of dict by using the copy method",mydict)
duplicate=dict
print("copy of dict by using the = method",duplicate)
dict["milage"]=60
print(duplicate)
