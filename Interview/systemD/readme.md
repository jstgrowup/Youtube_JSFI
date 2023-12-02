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
       - 

