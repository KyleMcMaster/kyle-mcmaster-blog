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
    id7b(Creating your first Saga and Persisting Saga Data)
    id7c(Saga Timeouts and Termination)
    id8a(Unit Testing NServiceBus Handlers)
    id9a(Monitoring with ServicePulse)

    id1 --> id2
    id2 --> id3
    id3 --> id4
    id4 --> id7a
    subgraph Sagas
    id7a --> id7b
    id7b --> id7c
    end
    id4 --> id8a
    subgraph Testing
    id8a
    end
    id4 --> id5a
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
    id4 --> id9a
    subgraph Additional Topics
    id9a
    end
```

## Series Outline

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
* * 7b - Creating your first Saga and Persisting Saga Data
* * 7c - Saga Timeouts and Termination
* Testing
* * 8a Unit Testing NServiceBus Handlers
* Additional Topics
* * 9a - Monitoring with ServicePulse

## Notes

I'm open to feedback, revisions, and other topics as needed. The goal is to have a series that demonstrates our competency in NServiceBus to potential clients as well as being a definitive guide for developers looking to get started with NServiceBus and support them as they advance through common patterns and gotchas. Similar to this series by Andrew Lock on Kubernetes for .NET. https://andrewlock.net/deploying-asp-net-core-applications-to-kubernetes-part-1-an-introduction-to-kubernetes/

Also, I couldn't get the mermaid diagram to order the subgraphs in a friendly manner but that is meant for my planning more than actual publishing in its current state.