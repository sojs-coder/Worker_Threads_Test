# Worker_Threads_Test

Testing out how worker_threads works and possible use cases


We looped over a massive quantity of numbers and squared them to simulate a difficult work job for the comupter

## Results:
### Small Dataset (2 Cores)
![Alt text](image.png)
Synchronous processing seems to be faster becuase of the latency when communicating with the threads 

### Medium Dataset (2 Cores)
![Alt text](image-1.png)
Still worker threads is marginally slower.


### Large Dataset (2 Cores)
![Alt text](image-2.png)
This time, worker threads beats synced processing by a large margin


### Large Dataset (4 cores)
![Alt text](image-3.png)


![Alt text](image-4.png)

![Alt text](image-5.png)