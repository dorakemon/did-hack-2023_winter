import requests
import os

SLACK_CHANNEL = os.environ.get('SLACK_CHANNEL', 'sample-channel')
SLACK_TOKEN = os.environ.get("SLACK_TOKEN", "xoxb-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

class SlackDriver:
    def send_message(self, message):
        params = {
            'channel': SLACK_CHANNEL, 
            'text': message,
        }
        r = requests.post('https://slack.com/api/chat.postMessage',
                          headers={'Authorization': 'Bearer ' + self._token},
                          params=params
        )
        return r.json()["message"]

    def send_file(self, file_path, thread_ts):
        files = {'file': open(file_path, 'rb')}
        params = {
            'channels': SLACK_CHANNEL, 
            'filetype': 'json_ld',
            'title': 'VP Log',
            'filename': "vp.json",
            'thread_ts': thread_ts,
        }

        requests.post('https://slack.com/api/files.upload',
                          headers={'Authorization': 'Bearer ' + self._token},
                          params=params,
                          files=files
        )


if __name__ == '__main__':
    slack = SlackDriver()
    res = slack.send_message('The door is opened by someone :female_supervillain:')
    slack.send_file("/tmp/vp.json", res["ts"])