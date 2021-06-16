from locust import TaskSet, task, HttpUser, constant_pacing

header = {'Content-type': 'application/json'}

class LoadTesting(TaskSet):
    
    @task(1)
    def test_input(self):

        with self.client.post(url="/api/test", json={"query":"test"}, catch_response=True) as res:
            if res.status_code == 408:
                print("Test: Timeout")
                res.failure("Timeout")
            elif res.status_code != 200:
                print("Test: code not 200")
                res.failure("Error")
            elif res.json()["res"] != "success":
                res.failure("Something Get Wrong in Backend")
            else:
                res.success()

class TestSpoServer(HttpUser):
    tasks = [LoadTesting]
    wait_time = constant_pacing(1)