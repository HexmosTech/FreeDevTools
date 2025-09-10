---
title: "MongoDB Commands - A Comprehensive Guide"
description: "Master MongoDB with this comprehensive guide covering basic commands, CRUD operations, advanced queries, and more. Learn to connect, manage databases, and efficiently manipulate data."
tags: ["mongodb", "database", "nosql", "commands", "crud", "tutorial"]
---

# Basics

## Connect MongoDB Shell

```bash
mongo # connects to mongodb://127.0.0.1:27017 by default
mongo --host <host> --port <port> -u <user> -p <pwd> # omit the password if you want a prompt
```

## Show All Databases

```bash
show dbs
```

## Show Current Database

```bash
db
```

## Create Or Switch Database

```bash
use <database_name>
```

## Drop Database

```bash
db.dropDatabase()
```

## Create Collection

```bash
db.createCollection('posts')
```

## Show Collections

```bash
show collections
```

# CRUD Operations

## Insert Row

```bash
db.posts.insert({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
```

## Insert Multiple Rows

```bash
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'News',
    date: Date()
  },
  {
    title: 'Post Four',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])
```

## Get All Rows

```bash
db.posts.find()
```

## Get All Rows Formatted

```bash
db.posts.find().pretty()
```

## Find One Row

```bash
db.posts.findOne({ category: 'News' })
```

## Find Rows

```bash
db.posts.find({ category: 'News' })
```

## Find Specific Fields

```bash
db.posts.find({ title: 'Post One' }, {
  title: 1,
  author: 1
})
```

## Update Row

```bash
db.posts.update({ title: 'Post Two' },
{
  title: 'Post Two',
  body: 'New body for post 2',
  date: Date()
},
{
  upsert: true
})
```

## Update Specific Field

```bash
db.posts.update({ title: 'Post Two' },
{
  $set: {
    body: 'Body for post 2',
    category: 'Technology'
  }
})
```

## Delete Row

```bash
db.posts.remove({ title: 'Post Four' })
```

# Other Functions

## Sort Rows

```bash
db.posts.find().sort({ title: 1 }).pretty() # asc
db.posts.find().sort({ title: -1 }).pretty() # desc
```

## Count Rows

```bash
db.posts.find().count()
db.posts.find({ category: 'news' }).count()
```

## Limit Rows

```bash
db.posts.find().limit(2).pretty()
```

## Chaining

```bash
db.posts.find().limit(2).sort({ title: 1 }).pretty()
```

## Foreach

```bash
db.posts.find().forEach(function(doc) {
  print("Blog Post: " + doc.title)
})
```

## Increment Field (`$inc`)

```bash
db.posts.update({ title: 'Post Two' },
{
  $inc: {
    likes: 5
  }
})
```

## Rename Field

```bash
db.posts.update({ title: 'Post Two' },
{
  $rename: {
    likes: 'views'
  }
})
```

## Sub-Documents

```bash
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})
```

## Find By Element in Array (`$elemMatch`)

```bash
db.posts.find({
  comments: {
     $elemMatch: {
       user: 'Mary Williams'
       }
    }
  }
)
```

## Add Index

```bash
db.posts.createIndex({ title: 1 })
```

## Drop Index

```bash
db.posts.dropIndex("title_1")
```

## Hide/Unhide Indexes

```bash
db.posts.hideIndex("title_1")
db.posts.unhideIndex("title_1")
```

## Text Search

```bash
db.posts.find({
  $text: {
    $search: "\"Post O\""
    }
})
```

## Greater & Less Than

```bash
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })
```
