
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
*10k
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
Im not understanding if node is limiting or sqlite is limiting

is 1gb pragma too high? 

shrijith — 11:17 AM
cache is not used
also - this is not creating a pool
it's just 1 db instance
how are you making calls?
sqlite maybe serializing the calls