from locust import TaskSet, task, HttpUser, constant_pacing, constant
import json

header = {'Content-type': 'application/json'}

class LoadTesting(TaskSet):
    
    # @task(1)
    # def test_input(self):

    #     with self.client.post(url="/api/test", json={"query":"test"}, catch_response=True) as res:
    #         if res.status_code == 408:
    #             print("Test: Timeout")
    #             res.failure("Timeout")
    #         elif res.status_code != 200:
    #             print("Test: code not 200")
    #             res.failure("Error")
    #         elif res.json()["res"] != "success":
    #             res.failure("Something Get Wrong in Backend")
    #         else:
    #             res.success()

    @task(1)
    def report_input(self):

        with self.client.post(url="/query_result", json={ 
                                                      "Reporter": "無",
                                                      "Mail": "無",
                                                      "Person": "許亦佑",
                                                      "Date": "Jun 02 2021 22:24:48",
                                                      "Type": "others",
                                                      "Content": "太帥了....割",
                                                      "Evidence": "https://www.facebook.com/profile.php?id=100000689919861"}, catch_response=True) as res:

            if res.status_code == 408:
                print("Test: Timeout")
                res.failure("Timeout")
            elif res.status_code != 200:
                print("Test: code not 200")
                res.failure("Error")
            elif json.loads(res.text)["status"] != "Success":
                res.failure("Something Get Wrong in Backend")
            else:
                res.success()

class TestSpoServer(HttpUser):
    tasks = [LoadTesting]
    # wait_time = constant_pacing(1)
    wait_time = constant(0)