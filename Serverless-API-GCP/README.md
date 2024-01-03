# Serverless API hosted on Google
> Google Cloud Platform (GCP)

This project uses [***node.js with typescript***](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript) to make a **serverless API** hosted on [***Google Cloud Platform (GCP)***](https://cloud.google.com). A container image from the source code of this project is created with [***Google Cloud's buildpacks***](https://cloud.google.com/docs/buildpacks/overview), **100% compatible** with the [***Cloud Native Buildpacks***](https://buildpacks.io) project; and then deployed with Google's [FaaS](#faas) [***Google Cloud Functions***](https://cloud.google.com/functions).

## FaaS

> Function-as-a-Service

**FaaS** is a [cloud computing](#cloud-computing) service model that allows developers to run functions on demand; i.e. a type of [serverless computing](#serverless-computing) where the cloud provider manages the underlying infrastructure and resources. It is often used to run short-lived functions in response to events, known as **serverless functions**.

## Cloud computing

**Cloud computing** is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet. Large clouds, predominant today, often have functions distributed over multiple locations from central servers.

## Serverless computing

**Serverless computing** is a [cloud computing](#cloud-computing) execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application, rather than on pre-purchased units of capacity. It can be a form of utility computing.
