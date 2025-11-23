did 50 work @lovestaco ?
lovestaco

— Yesterday at 9:08 PM
yeah after some time it fails
shrijith — Yesterday at 9:09 PM
fails in what way?
lovestaco

— Yesterday at 9:09 PM
missed adding mmap to all dbs adding now
lovestaco

— Yesterday at 9:09 PM
60s timeout
shrijith — Yesterday at 9:09 PM
ok
how many processes in pool?
or threads
increase thread count in the sqlite pool as well
rotate reads
lovestaco

— Yesterday at 9:16 PM
CPU not consuming fully
Only 1 thread cuz node is running sequentially
Image
shrijith — Yesterday at 9:17 PM
explain this?

Only 1 thread cuz node is running sequentially
in simpler terms
what is meant by "node is running sequentially"
lovestaco

— Yesterday at 9:18 PM
I run the server using

node dist/server/entry.mjs

This is single threaded

and requests goes to this server and executes one after another
shrijith — Yesterday at 9:19 PM
Image
can increase throughput a bit more this way
also - are you using - synchronous sqlite?
(still)
it maybe blocking requests
lovestaco

— Yesterday at 9:21 PM
yes
shrijith — Yesterday at 9:21 PM
i think i recommended moving to async
1 process can process multiple requests at the same time (almost)
it can async process 7-8 requests at same time
probably more
lovestaco

— Yesterday at 9:22 PM
lemme check
shrijith — Yesterday at 9:22 PM
yeah use async then it'll go faster probably
pm2 thing - your laptop is one thing
but in server there is only 2 parallel cpu
one cpu can be made to deliver this much roughly
Image
with proper async
so we used synchrnous sqlite earlier for build - because that's the right tool there
but sync is not the right tool for SSR
because it blocks the event loop
basically every cpu is a

while 1:
handle_request()
thing
if handle_reuqest is blocking - then the loop is stuck - it can't process next request till this finishes
but if it is async - then it can process 5k-10 requests
\*10k
you understand how "async" works?
async is just threading within a cpu - with a queue plugged in front
it'll do a unit of work in request 1, then request 2, etc
round robin kind of thing
this way it can serve thousands of request from 1 cpu
per minute
shrijith — Yesterday at 9:32 PM
is all your db queries in 1 file @lovestaco ?
or scattered
lovestaco

— Yesterday at 9:33 PM
5 files
shrijith — Yesterday at 9:33 PM
llm can probably do it
just point 5 files and make it async with node sqlite
and see if it works
lovestaco

— Yesterday at 9:33 PM
yeah trying
and i need to comment tldr, cheatsheet , tools, mcp i guess
cuz they are not sqlite based
for testing
shrijith — Yesterday at 9:35 PM
why comment it
if it's reading file directly
it should also be async
any synrhnous operation will block
file opening should be async
a smaller fix can be running the queries in a worker thread -r ather than main thread
but this requires thread communication
but unblocks the main thread
i think it's a hack
lovestaco

— Yesterday at 9:38 PM
yeah thats what im trying now
shrijith — Yesterday at 9:38 PM
it's not a good approach
and WAL should be mandatorily enabled
without that concurrent read wont work
lovestaco

— Yesterday at 9:40 PM
Image
shrijith — Yesterday at 9:42 PM
it is a mutual exclusion thing
without it also it may work
but if any mods happening - it'll choke
in our case static db - so should be fine
i think instead of worker - you can just do it properly
it'll again start hankering
you'll waste time implementing thread communication and such things
which becomes even more complicated when cpu = 2
or more
also wherever we have file reads - that also should be async
lovestaco

— Yesterday at 9:44 PM
ive commented that for now, let me get the db right
shrijith — Yesterday at 9:44 PM
ok - you may hae to limit crawler reach
to a completed section
you can try to complete say emojis and let crawler loose on that section
and test
lovestaco

— Yesterday at 9:45 PM
okay go catog by catog
then multi catog
then files
then dbs and files
shrijith — Yesterday at 9:45 PM
yes first get 1 category parallel crawl working
get the concepts solved
not "then db"
get 1 db working for 1 category (say emojis)
lovestaco

— Yesterday at 9:46 PM
yes
shrijith — Yesterday at 9:46 PM
again - this was a mistake in scaling
the "parallel access" requirement should've been tested first
the async lib, etc
i thin i had mentioned it - but iddnt emphasize it

lovestaco — 11:17 AM
Changed to async

Used pm2 and ran in 2 cpu

50 parallelism in crawler

After 6 mins it started erroring out for 10-20 seconds
then works properly for another min

then again starts erroring out

when it starts erroing out,
the db queies is taking more than a 1.5-2.5 second to complete

When no load
usually quries take 20ms,

what's the pragma and other setting for sqlite
lovestaco

— 11:15 AM
Im not understanding if node is limiting or sqlite is limiting
lovestaco

— 11:15 AM
Image
1gb mmap
shrijith — 11:17 AM
cache is not used
also - this is not creating a pool
it's just 1 db instance
how are you making calls?
sqlite maybe serializing the calls
https://github.com/TryGhost/node-sqlite3/pull/1514
GitHub
Allow parallel execution of node event loop and sqlite3 in Statemen...
This PR allows the eager start of the next queued query execution in Statement::All - before the JS callback execution.
In some cases, it could double performance by allowing parallel execution of ...
This PR allows the eager start of the next queued query execution in Statement::All - before the JS callback execution.
In some cases, it could double performance by allowing parallel execution of ...
try to understand what this guy is saying
one mor: https://github.com/TryGhost/node-sqlite3/issues/1299
GitHub
perf: concurrency issues · Issue #1299 · TryGhost/node-sqlite3
I brought up some information here, #703 but wanted to make a direct issue on this topic. real world use of this library will be in a highly asynchronous context. However, db.serialize is a synchro...
I brought up some information here, #703 but wanted to make a direct issue on this topic. real world use of this library will be in a highly asynchronous context. However, db.serialize is a synchro...
make sure some "hidden serialization" not happening
Image
also - recommend trying to figure this out in a simple separate script to understand
You can benchmark the numbers
Optimize in 1 simple script
have 1 table
100k rows
try to pick 50 random rows at a time
SELECT
what is the scaling property?
shrijith — 11:24 AM
Image
Image
https://github.com/TryGhost/node-sqlite3/issues/1395
GitHub
Parallel queries blocks nodejs/libuv worker pool · Issue #1395 · ...
node-sqlite3 runs queries for the distinct prepared statements in independent worker pool tasks but all sqlite3 queries to the same sqlite3 connection internally serialized on the mutex. So other l...
node-sqlite3 runs queries for the distinct prepared statements in independent worker pool tasks but all sqlite3 queries to the same sqlite3 connection internally serialized on the mutex. So other l...
some example code in that
shrijith — 11:25 AM
this is the code you want to optimize
CONCURRENCY= 1: 2000 queries complete in 1840 ms, 0.92 ms per SELECT, event loop utilisation=84%, median libuv thread pool queue latency = 0.924 ms
CONCURRENCY= 3: 2000 queries complete in 1748 ms, 0.874 ms per SELECT, event loop utilisation=88%, median libuv thread pool queue latency = 0.975 ms

CONCURRENCY=10: 2000 queries complete in 1688 ms, 0.844 ms per SELECT, event loop utilisation=91%, median libuv thread pool queue latency = 10.995 ms
CONCURRENCY=20: 2000 queries complete in 1936 ms, 0.968 ms per SELECT, event loop utilisation=81%, median libuv thread pool queue latency = 32.638 ms
in that example it seems not to be working
because even with concurrency - there's no perf benefit
so solving that core case is the problem
you can try this solution first for the problem:
Image
just call serialize() without callback
some magic supposed to happen
shrijith — 11:33 AM
@lovestaco - also enable WAL mode, cache, etc
Image
you need to create multiple connections (underlying lib must do this)
Image
could be same db instance ig - but it should start new connection for each query
you haven't shared how you are querying this stuff
@lovestaco

isn't .all async?
why you are wrapping it in promise?
https://github.com/tryghost/node-sqlite3/wiki/Control-Flow#databaseparallelizecallback
GitHub
Control Flow
SQLite3 bindings for Node.js. Contribute to TryGhost/node-sqlite3 development by creating an account on GitHub.
SQLite3 bindings for Node.js. Contribute to TryGhost/node-sqlite3 development by creating an account on GitHub.
actually there is a parallel mode
we should use parallelize mode
db.all is not recommended for larger datasets
Image
https://github.com/TryGhost/node-sqlite3/wiki/API
GitHub
API
SQLite3 bindings for Node.js. Contribute to TryGhost/node-sqlite3 development by creating an account on GitHub.
API
https://chatgpt.com/share/6922a678-85a4-800a-9bf1-5b1f0bee6af8
ChatGPT
ChatGPT - Simplify SQL query
Shared via ChatGPT
Image
some suggestions here on optimizing the query itself
can add index and probably get some mileage
but i think these are all "side concerns"
main thing to crack is - that experiemnt
shrijith — 11:47 AM
also i'm not understanding why query needs to be so complex
it looks like too much computation happening in real time
rather than pre-computed
it should be a simple select statement
you can pre-compute stuff and put in another table
so that all that's happening is select \*...
https://chatgpt.com/share/6922a678-85a4-800a-9bf1-5b1f0bee6af8
ChatGPT
ChatGPT - Simplify SQL query
Shared via ChatGPT
Image
same link has ideas around it
virutal tables, etc
the query should be a simple:

select a b c d from xyz offset o limit l where c=g
this should be final max complexity
nothing more realtime
any calculation you need should be precomputed
because it's a one time operation
i think all calls should be wrapped in parallelize
context
because this lib has no "connection" concept
so if you wrap in parallelize it will not block
oh apparently it is default
lovestaco

— 11:53 AM
I added parallelize
Problem is after 2 mins
the query response time is increasing
starts with 80ms goes to 5secons
requests starts fialing
then again starts with 100ms
shrijith — 11:54 AM
i think can do in this order:

simplify query (precompute tables)
add indices
investigate parallel queries
because it's doing JSON management in realtime etc
underlying library may get confused with parallel queries with all this
because these are special functions etc
so complicate execution at engine level
