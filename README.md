# Worker_Threads_Test

Testing out how worker_threads performs and possible use cases


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

### Massive Dataset (4 Cores)
![Alt text](image-4.png)

Once again, worker threads is significantly faster than single threaded.  ~4 times faster, as expected, as we have 4 cores


### Variable Dataset (4 cores)
![Alt text](image-5.png)

This time worker_threads is not a clear winner, with just a 2 second lead on synced processing.

### Gigantic Dataset (48 Million times to loop and square the numer)
#### 8 real cores, 8 virtual cores


![Alt text](image-6.png)

Worker_threads is ~13 times faster this time

## Conclusions
Use worker_threads when you need massive computations to be done, otherwise the latency in communicating with the cores is too massive and will set you back.