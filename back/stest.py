import speedtest
import pythonping

def download():
    st = speedtest.Speedtest()
    download = int(st.download())/1000/1000
    return download

def upload():
    st = speedtest.Speedtest()
    download = int(st.upload())/1000/1000
    return download

def ping(host):
    result = pythonping.ping(host, count=1)
    if result.rtt_avg:
        return round(float(result.rtt_avg)*1000, 1)
    else:
        return "-1"