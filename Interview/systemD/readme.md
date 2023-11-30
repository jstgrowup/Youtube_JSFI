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
