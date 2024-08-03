import eel
from back.stest import download, upload, ping
from back.user import my_ip, info_by_ip

@eel.expose
def get_ip():
    return my_ip()

@eel.expose
def get_city():
    return info_by_ip(my_ip())["city"]

@eel.expose
def get_download():
    return round(download(), 0)

@eel.expose
def get_upload():
    return round(upload(), 0)

@eel.expose
def get_ping():
    return round(ping("voicy.site"), 1)

eel.init('front')
eel.start('index.html', size=(450, 700))