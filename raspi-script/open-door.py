#!/usr/bin/python
 
import wiringpi as GPIO
import time
 
servo_pin = 18    # using #18 pin
 
GPIO.wiringPiSetupGpio()
GPIO.pinMode(servo_pin, 2)
GPIO.pwmSetMode(0)
GPIO.pwmSetRange(1024)
GPIO.pwmSetClock(375)

set_degree = 100
move_deg = int((9.5*set_degree/180 + 2.5)*(1024/100))
GPIO.pwmWrite(servo_pin, move_deg)
time.sleep(10)
set_degree = 0
move_deg = int((9.5*set_degree/180 + 2.5)*(1024/100))
GPIO.pwmWrite(servo_pin, move_deg)
