# Python program to convert text
# file to JSON


import json
num_lines = sum(1 for line in open('names.txt'))
filename = 'names.txt'

dict = {}

with open(filename) as fh:
    i=0
    for line in fh:
        dict[i] = str(line)
        i+=1



# creating json file
out_file = open("names.json", "w")
json.dump(dict, out_file, indent = 4)
out_file.close()