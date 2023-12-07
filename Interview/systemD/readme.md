# What is DB replication?
- to protect against a data loss during system failures to serve increased load
- STRATEGIES
  - so there are leaders and followers here we make the call to the leader DB first now the leader will update the follower databases 
  but there are two ways one is a synchronous way in which the leader will wait until the followers are updated oe not in that case if any child fails to respond than it will terminate the whole request whereas 
  - in asynchronous way which is the better way it will retun some promise or something and in the backgroud it will do all the read and requests here also there is a risk of the leader failure in that case one of a follower takes over 
- 2nd STRATEGY (multi leader)

  -  here more than one leader will mitigate the risk of leader failure so if one leader goes down than the other can step in 
  -  an algo called packsos algo is used to elect the leader
  -  this is relatively slow where because here we have to update many DBs because of more than one leaders and multiple followers  

- 3rd  STRATEGY (leaderless)
  - to solve this leader election complezity we have leaderless replication DynamoDB is an example of leaderless replication

# CAP and PACELC theorem
- CAP
  - Consistency , availability and partition tolerance
  - A distributed system can only achieve any to properties simultaneously not all three
  - A Distributed system is a collection of independent componets spread across different networked computers communicate by passing messeges to operate
     - Consistency
       - A client must get the same data from all the components(nodes)
       - The read and write should be proper
     - Availability
       - Client must get response even if one or more components are down 
       - reads should not break
     - Partition Tolerence
       - a system must continue to work even if there is a network communication breakdown between one or more nodes
       - lets say i have three nodes A,B,C D now the communication between A to B and C is broken so now the A got isolated now whenever the A is back the write requests should again happen and A should be synchronized again
  - Proof
     - `availability and partition`
       - lets say we have two components A and B now a client makes a request lets say the both the components are up and running now the client made a request to the B components and the B was unable to update A so now the A is not synchronized so here the consistency is not there but the partition tolerance and both the systems are available
     - `Consistency and partition`
      - same case now lets say the user tries a write request and the system A tells that because he is not able to connect to system B therefore  he wont be able to do a write request but lets say the user tries a read request now there is consistency because he will get the same data and the partition tolerance is already there
     - `Consistency and availability`
      - now lets say if there is a partition between two components than it will go the previous two cases it will reject the write requests 
# PACELC theorem
 -  If there is a network partition than you have to achieve availability and consistency (PAC)
 -  else if there is not NP still you have to consider latency and consistency (ELC)
 - examples
   - PA - Mongo,cassandra,riak
   - CP - Dynamodb , cosmosDB mysql , postgrsql
   - EL - cassandra , dynamodb cosmos 
   - EC - DynamoDB , couchbase , mongoDB, mysql , postgreSQL
# What is Normalization / Denormalization?
 - Normalization 
   - normalization is a way of putting data in multiple tables to avoid redundancy
   - lets say we have a department and employee and i have to store the department details in all the employees this is a redundant data so rather than this i can just simply store departments in an another table and reference them to each employee
 - Denormoralization 
  - it combines the data and organizes it in a single table .this is a process of adding redundant data to the normalized relational database to optimize its performance
    - Benefits
      1. faster data read operations
      2. Management convenience
      3. High data availability 
      4. reduces the number off network calls to fetch data from multiple places

  `Challenges of Denormalization`
      1. Redundant data 
      2. It increases the complexity
      3. Data inconsistency
      4. It will cause slow write operations since we will need to write multiple places dur to redundancy
# What is Entity Relationship Model? ( ER Model )
  - It describes the data conceptually (logical view)
  - Entity
    - May be an object with physical existence (ex: house, person)
    - A real-world object or concept that has an existence and can be uniquely identified
  - ER diagrams use graphical representations to illustrate entities, attributes, relationships, and the overall structure of a database
# What is indexing?
  - Indexing creates a lookup table with the column and the pointer to the memory location of the row containing this column
  - lets say in the lookup table the data will be sorted so that while we apply a whereclouse it will take log(N) time complexity it will atleast know which part to search
# How do you use lookup in mongodb?
 - joints in DB
 - $lookup is an aggregation pipeline stage that allows you to perform a left outer join between two collections
 ```
        await storeCatalogueData.aggregate([
          {
            $lookup: {
              from: 'StoreCatalogueVariant',
              localField: '_id',
              foreignField: 'storeCatalogueId',
              as: 'variants',
            },
          },
        ])
 ```
# What is the difference between SQL and NoSQL databases?
  - SQL stands for structured query language these are usually in the form of tables these are vertically scalable
  - NoSQL are document , JSON,BSON ,graph formats these are horizontally scalable
  - SQL are relational databases so relation is easy and its well structured
  - SQL is ACID complient 
  - SQL takes a lot of time to setup than that of noSQL because 
  - SQL is not effective for storing or querying unstructured data where the format is unknown
  - SQL is difficult to scale horizontally for read heavy systems than we can make a provision for multiple replicas but for write heavy systems the only way is to vertically scale up which means more expensive 
  - NoSQL are more flexible and simpler to setup because they do not support table relationships
  - because they are better in handling unstructured data therefore they are better in sharding which  makes horizontal scaling much easier
  - Database sharding is a technique used to improve the performance and scalability of a database by dividing it into smaller, more manageable pieces called "shards." Each shard is essentially a separate database that stores a subset of the overall data.
  - NoSQL is designed for distributed usecases and write heavy systems can be supported by having multiple right shards for the same data partition now the thing is lets say the write  request goes to a shard in a distributed nosql clustur there is a small delay before it reflects to the other replicas at that time if  there is a read request it might lead to inconsistent data

# What is unit testing?
  - here the individual unit of the software is tested
  - a unit is the smallest testable part of any software
  - each unit of the software should perform as designed
     1. unit testing offers better and clean code design and it helps us to write loosely coupled code
     2. unit test helps us to indentify and ensure that the new changes do not introduce any break in existing functionality
     
# What is DNS?
  - DNS stands for Domain Name Server its like a phone book of the internet
  - here an IP addresses is represented by a human readable domain name
  - when a user types a url than it will check the information in local cache if it is unable to find that information in the local cache if its not there than it will search in the DNS server in the local area network(LAN)

# How does the internet work?
  - the internet is a global network of interconnected computer networks that allows for the sharing of information and communication across the world
  - there are some protocols like transmission control protocol and internet protocol by which the devices transmits data packets
     1. when we access our device sends a request to ISP through a modem or router
     2. our ISP then connects us to the internet , the ISPs are connected to other networks through exchange points, now our devices can communicate with other devicesaround the world by sending and recieving data packets
# HTTP and HTTPS?
   - HTTP is the protocol used by web servers and browsers to communicate and transfer data over the internet but in HTTPS it uses SSL/TLS encryption to protect the data being transferred
   - HTTP doest uses any encryption while sending the requests whereas in  HTTPS it establishes a secures a connection with the web browser
# What is throughput?
   - it is a measure of how many units of information a system can process in a given time its amount of data that can be sent / time taken for the transfer
   measurement - bps 
# What is latency?
  - Latency is the time it takes for data to travel from its source to its destination
  - It is measured in ms and can be affected by a variety of factors including 
     1. network congestion 
     2. Hardware capabilities 
     3. the distance between the source and destination
# Rate Limiting?
  - it is technique by which we can rate the number of requests that are made to an API, service, or website
  - it ensures stability and availability of the system by preventing excessive usage that could lead to performance issue
  [![Watch the video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://youtu.be/qUydEBZmGvU)
  
  - its like setting a limit like 10 or 1000 requests perday
  - `Algorithms for rate limiting`
     1. `window Based`
       - so there are windows lets say a 1min window so in that window there will be a counter to check the number of requests lets say 10 reqests so per request the counter will decrease and when the counter is 0 it wont allow any other requests to come in now the issue is from 11th requests till the end they will all try in the next window all of a sudden brust of traffic which is an issue thye have to wait till the reset of the window 

     2. `Sliding  window`
       - it follows a window of requests for serving
     3. `Token bucket`
       - so its like you have a bucket filled with tokens
       - so now when a requests comes in it will first check if there is any token in the bucket or not now if the token is there than we remove the token and forward the request for processing , if the bucket is empty than the request is simply discarded and after a certain time the bucket is refilled again with the tokens 
    4. `Leaky bucket`
       - so there is a bucket with a hole in it so now all the request will supply a limited number of request to the   server  so it doesnt matter how much traffic its in the bucket it will pass some limited number of requests to the server
# What is a load balancer ?
  - it balances the load coming form the clients
  - the loadbalancer can use a simple round robin algorithm which basically means if there are servers A, B and C the balancer will redirect the first request to the server A than following the second request to B and so on
  - the DNS will be pointing to the loadbalancer
  - the load balancer also checks for the server health if the server A is down than the balancer will redirect the request to the server B
# What are horizontal and vertical scaling?
  1. `Vertical Scaling`
    - it is also known as scaling up 
    - its a way where we increase the CPU and RAM of a server
    - the issue is if this server goes down than the whole application will go down
  2. `Horizonatal Scaling`
    - it is also known as scaling out
    - its a way where we add more servers to increase resources
    - so if one server goes down than the other server will take up the requests
# What is a stateless backend?
   - [![Watch the video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://youtu.be/UQ2cfQV5nJ4)
   - HTTP protocol is a stateless backend 
# How do Browsers work?
   - Browsers is almost like an OS 
   - [![Watch the video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://youtu.be/5rLFYtXHo9s)
# Describe how you design an API?
   - API is a documented way in which the external customers interact with the code to get there work done
   - API is just a function that someone will execute 
   `Some rules for a better API architecture`
    1. In an API the naming should be correct lets say i want the whatsapp group admins list of a particular group so now i have to pass the group ID and the function will return the list of admins if it is returning more information like the group details than the naming is not correct
    2. parameters should be defined early so if the parameters change than the function name also should change as well
    3. we can optimize our api by taking more number of parameters so that i can get more in formation about the task what to do and making lesser calls internally lets say i am making 4 calls but with some more information i can make it to 2 calls
    4. designing of the response should be good because what we do is we send everything into the response thinking that its better so if in future we need some more keys we dont have to add those keys thats why its recommended that what ever the details the caller is asking only those data should be visible
    5. error handling is also very important so writing all the errors that are even unnecessary as well as one single generic error for all the scenarios is also bad , lets say we have a parameter which we are expecting as an integer so inside the function rather than writting a condition check we can define the type of the parameter as integer we can defined the size of that parameter i will just fail the query
    6. defining the endpoint is also important 
    7. if there is a huge response that is involved always consider the idea of client specific pagination where the client will send the pafgination data now as well as you can try frgametation here while we are talking from microserveice to microservice we fragment the response
# What are ways to cache on the backend?
   - cache reduces the latency
   - reduces the load in the database
   - reduces the network cache
      `client cache`
      - stores the web resources such as images , stylesheets , scripts and other files on the client-side in order to improve the performance and loading times of web pages example (client-caching)
      `CDN cache`
      - CDN is a network of distributed servers that work together to deliver web content such as images , stylesheets, scripts and other resources based on the geographic location , CDN stores copies of these web resources on multiple servers placed around the world
      `Web server cache`
      - 
      `Database caching`
      - Database caching involves storing frequently accessed or computationally expensive data in a faster and easily retrivalbe location to improve the overall performance of database-driven application 
      `Application caching`
      - 
   - `Ways of caching`
      1. global cache is a way where all the microservices have a single cache known as shared cache 
      2. Distributed cache where we have distributed cache nodes here one node will be the parent and others will be the replcias s that the microservices can communicate with multiple caches
      [![reference]](https://youtu.be/bP4BeUjNkXc)

# what is Redis?
   - Redis is an in-memory data structure store that is often used as a caching solution due to its fast read and write operations.
   - It allows you to store and retrieve data in memory, making it a great choice for caching frequently accessed or computationally expensive data
# How can we implement caching on frontend?
   - HTTP caching - web servers can include HTTP caching headers in their responses . these headers instruct the browser on how to cache the resources 
   - Local Storage and session storage : An API allows storing key-value pairs persistently on the client side used for caching small amounts of data that need to persist across browser sessions
   - Session storage stores the data and is available for the duration of the page session
# What is a CDN?
   - A CDN, or Content Delivery Network, is a network of geographically distributed servers that work together to deliver web content, such as text, images, videos, and other resources, to users based on their geographic location
   - The primary purpose of a CDN is to improve the performance, reliability, and efficiency of delivering web content by reducing latency and minimizing the load on the origin server
      1. The CDN provider replicates and caches content from the origin server (the server where the original content is hosted) to multiple servers located in different geographical locations
      2. These CDN servers are strategically placed in various data centers around the world
      3. The CDN caches static content, such as images, CSS files, and JavaScript, at the edge servers
# What is REST API?
   - it is a type of service that enables different systems to communicate over the internet 
   - RESTful APIs rely on the HTTP protocol which is built on top of TCP/IP
   - when there is a request the REST creates an object and sends it in the response 
   - When client makes a request to the server it sends a TCP packet containing the HTTP request including the HTTP method , URL and any parameters or headers and the server responds back the client with the response status code and headers 
   - REST API uses HTTP methods to perform operations on the resources 
      `Principles`
      1. Stateless : REST is stateless that means the request will have all the information that is required and server does not maintain any session state
      2. REST follows client-server architecture 
      3. REST API can be designed to be cacheable which means that clients can store the responses and reuse them
# what is gRPC?
   - gRPC is a high performance RPC framework technology which uses something called protocol buffers which uses a compact binary format making them more efficient in terms of size and speed compared to other serialization formats like JSON or XML its a method of serializing the data 
   - REST, gRPC, websocket , SOAP these all the communication protocols or frameworks used in web development for different purposes
   - It uses HTTP/2 as the underlying transport protocol 
   - gRPCs are usually used for internal microservice communication
   - it is used in high performance scenarios
# What is GraphQL? 
   - graph query language is a query language 
   - it provides a more efficient and flexible alternative to REST APIs for building web applications
   - in graphQL you just create a single endpoint unlike REST where you create seperate APIs 
   - it only fetches what you actually need you just have to specify what fields to return 
# What is HTTP?
   - It is a set of rules which governs the exchange of  data over the internet 
   - It sets some rules on how the client and server should communicate with each other
   - It stands for Hypertext Transfer Protocol
# What is web socket?
   - [![Video](check this out)](https://youtu.be/xTR5OflgwgU) for better understanding 
   - webSocket is a two-way computer communication protocol over a single TCP
   - it is not like http where the client has to constantly poll the server for new information
   - it is useful for real-time communication between the client and server 
   - 