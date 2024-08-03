import requests

def my_ip():
    return requests.get('https://api.ipify.org').text

def info_by_ip(ip):
    try:
        responce = requests.get(url=f"http://ip-api.com/json/{ip}").json()
        return responce
    except:
        return None