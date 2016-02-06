#!/usr/bin/python

import sys
import pifacedigitalio
from datetime import datetime

pifacedigital = pifacedigitalio.PiFaceDigital()

def main(argv):
   while True:
      line = sys.stdin.readline();
      if line.strip() == "on":
         pifacedigital.relays[0].turn_on()
      elif line.strip() == "off":
         pifacedigital.relays[0].turn_off()

if __name__ == "__main__":
   main(sys.argv[1:])
