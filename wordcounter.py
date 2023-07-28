wordCount=0
f= open("input.txt", "r") #replace with your file
a= open("output.txt", "a")
    
for lineOfText in f.readlines():
    f1=lineOfText.split()
    a.write(str(len(f1)))
