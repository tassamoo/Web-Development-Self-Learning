#! /usr/bin/env python3
import os

os.system ("git add .")
message = input("Message:")
os.system ("git commit -m '" + message + "'")
os.system ("git push -u https://github.com/tassamoo/web_dev")
