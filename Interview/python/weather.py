import requests
import json
import win32com.client 
speaker = win32com.client.Dispatch("SAPI.SpVoice") 
city=input("Enter the name of the city\n")
url=f"https://api.weatherapi.com/v1/current.json?key=0004e45608dd4d61831140449230911&q={city}"
r=requests.get(url)
print(r.text)
dic=json.loads(r.text)
# its like json.parse
w=dic["current"]["temp_c"]
text="subham"
speaker.Speak(f"say the current weather in {city} is {w}")


