#!/usr/local/bin/python
import sys, os, user

# sys.path.insert(0, "/usr/lib/python2.7")
sys.path.insert(0, "/home/phongvca/django")
sys.path.insert(0, "/home/phongvca/dingoprojectorg")

# Switch to the directory of your project.
os.chdir("/home/phongvca/dingoprojectorg")

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ['DJANGO_SETTINGS_MODULE'] = "dingoprojectorg.settings"

from django.core.servers.fastcgi import runfastcgi
runfastcgi(method="threaded", daemonize="false")