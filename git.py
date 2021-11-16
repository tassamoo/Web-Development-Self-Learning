#! /usr/bin/env python3
import os

os.system ("git add .")
message = input("Message:")
os.system ("git commit -m '" + message + "'")
os.system ("git push -u https://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@github.com/tassamoo/web_dev.git")