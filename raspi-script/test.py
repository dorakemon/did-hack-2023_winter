import datetime

print("test")

with open("./test.log", "w") as f:
    f.write(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))