<!-- ---
title: Content Ideas For Future Blog Articles
date: "2023-08-01T00:00:00.000Z"
description: "Ideas, sketches, and drafts for future blog articles."
image: "/ideas.png"
--- -->

# Asynchronous Messaging with NServiceBus Blog Post Series Outline

```mermaid
flowchart TB
    id1(Asynchronous Messaging Basics)
    id2(Introduction to NServiceBus)
    id3(Getting Started With NServiceBus in .NET)
    id4(Messages vs Commands vs Events in NServiceBus)
    id5a(NServiceBus Transports with LearningTransport)
    id5b(NServiceBus with RabbitMQ)
    id5c(NServiceBus with SQS)
    id5d(NServiceBus with Azure Service Bus)
    id6a(Error Handling and Retry Policies)
    id6b(Outbox Pattern in NServiceBus)
    id6c(Unit of Work with NServiceBus)
    id6d(Chain of Responsibility in NServiceBus)
    id6e(Send Only Endpoints with ASP.NET Core)
    id7a(Saga Pattern in NServiceBus)
    id7b(Saga Timeouts and Termination)
    id8a(Unit Testing NServiceBus Handlers)
    id9a(Monitoring with ServicePulse)

    id1 --> id2
    id2 --> id3
    id3 --> id4
    id4 --> id5a
    id4 --> id9a
    subgraph Additional Topics
    id9a
    end
    subgraph Transports
    id5a --> id5b
    id5b --> id5c
    id5c --> id5d
    end
    id4 --> id6a
    subgraph Messaging Concepts and Patterns
    id6a --> id6b
    id6b --> id6c
    id6c --> id6d
    id6d --> id6e
    end
    id4 --> id7a
    subgraph Sagas
    id7a --> id7b
    end
    id4 --> id8a
    subgraph Testing
    id8a
    end
```

* 1 Asynchronous Messaging Basics (optional series introduction)
* 2 Introduction to NServiceBus 
* 3 Getting Started With NServiceBus in .NET
* 4 Messages vs Commands vs Events in NServiceBus
* Transports
* * 5a NServiceBus Transports with LearningTransport
* * 5b NServiceBus with RabbitMQ
* * 5c NServiceBus with SQS
* * 5d NServiceBus with Azure Service Bus (or Storage Queues)
* Messaging Concepts and Patterns
* * 6a - Error Handling, Retry Policies, and Recoverability
* * 6b - Outbox Pattern in NServiceBus
* * 6c - Unit of Work with NServiceBus
* * 6d - Chain of Responsibility in NServiceBus
* * 6e - Send Only Endpoints with ASP.NET Core
* Sagas
* * 7a - Saga Pattern in NServiceBus
* * 7b - Saga Timeouts and Termination
* Testing
* * 8a Unit Testing NServiceBus Handlers
* Additional Topics
* * 9a - Monitoring with ServicePulse