```
[stdout] [Auth Middleware] JWT found, allowing request to proceed
[stdout] [2025-12-06T10:01:18.634Z] [EMOJI_DB] Worker 1 completed getCategoriesWithPreviewEmojis in 25ms
[stdout] [2025-12-06T10:01:18.635Z] [EMOJI_DB] Worker 1 handling getTotalEmojis
[stdout] [2025-12-06T10:01:18.635Z] [EMOJI_DB] Worker 1 completed getTotalEmojis in 0ms
[stdout] [2025-12-06T10:01:18.635Z] [EMOJI_DB] Worker 1 handling getEmojiCategories
[stdout] [2025-12-06T10:01:18.635Z] [EMOJI_DB] Worker 1 completed getEmojiCategories in 0ms
[stdout] [2025-12-06T10:01:18.635Z] [EMOJI_DB] Worker 1 handling getEmojiCategories
[stdout] [2025-12-06T10:01:18.635Z] [EMOJI_DB] Worker 1 completed getEmojiCategories in 0ms
[stdout] [2025-12-06T10:01:18.635Z] [EMOJI_DB] Worker 1 handling getEmojiCategories
[stdout] [2025-12-06T10:01:18.635Z] [EMOJI_DB] Worker 1 completed getEmojiCategories in 0ms
[stdout] [2025-12-06T10:01:18.635Z] [EMOJI_DB] Worker 1 handling getEmojiCategories
[stdout] [2025-12-06T10:01:18.635Z] [EMOJI_DB] Worker 1 completed getEmojiCategories in 0ms
[stderr] MaxListenersExceededWarning: Possible EventTarget memory leak detected. 101 message listeners added to [Worker]. MaxListeners is 100. Use events.setMaxListeners() to increase limit
[stderr] emitter: Worker {
[stderr] \_events: [Object ...],
[stderr] \_eventsCount: 3,
[stderr] \_maxListeners: 100,
[stderr] [Symbol(kCapture)]: false,
[stderr] threadId: [Getter],
[stderr] ref: [Function: ref],
[stderr] unref: [Function: unref],
[stderr] stdin: [Getter],
[stderr] stdout: [Getter],
[stderr] stderr: [Getter],
[stderr] performance: [Getter],
[stderr] terminate: [Function: terminate],
[stderr] postMessage: [Function: postMessage],
[stderr] getHeapSnapshot: [Function: getHeapSnapshot],
[stderr] [Symbol(Symbol.asyncDispose)]: [AsyncFunction],
[stderr] setMaxListeners: [Function: setMaxListeners],
[stderr] getMaxListeners: [Function: getMaxListeners],
[stderr] emit: [Function: emit],
[stderr] addListener: [Function: addListener],
[stderr] on: [Function: addListener],
[stderr] prependListener: [Function: prependListener],
[stderr] once: [Function: once],
[stderr] prependOnceListener: [Function: prependOnceListener],
[stderr] removeListener: [Function: removeListener],
[stderr] off: [Function: removeListener],
[stderr] removeAllListeners: [Function: removeAllListeners],
[stderr] listeners: [Function: listeners],
[stderr] rawListeners: [Function: rawListeners],
[stderr] listenerCount: [Function: listenerCount],
[stderr] eventNames: [Function: eventNames],
[stderr] },
[stderr] type: "message",
[stderr] count: 101,
[stderr]
[stderr] at overflowWarning (node:events:185:14)
[stderr] at addListener (node:events:158:22)
[stderr] at <anonymous> (/home/ubuntu/FreeDevTools/frontend/dist/server/chunks/emojis-utils_BonZaL4u.mjs:756:12)
[stderr] at new Promise (1:11)
[stderr] at executeQuery (/home/ubuntu/FreeDevTools/frontend/dist/server/chunks/emojis-utils_BonZaL4u.mjs:736:10)
[stderr]

[stdout] [Auth Middleware] ENABLE_SIGNIN env value: "true", enabled: true, Path: /freedevtools/emojis/smileys-emotion/
[stdout] [Auth Middleware] Is static asset: false
[stdout] [Auth Middleware] Has ?data= param: false
[stdout] [Auth Middleware] JWT from Authorization header: missing
[stdout] [Auth Middleware] JWT from cookie: present
[stdout] [Auth Middleware] JWT found, allowing request to proceed
[stdout] [EMOJI_DB][2025-12-06T10:01:18.820Z] Dispatching getEmojiCategories
[stdout] [EMOJI_DB][2025-12-06T10:01:18.834Z] getDiscordCategoriesWithPreviewEmojis completed in 650ms
[stdout] [EMOJI_DB][2025-12-06T10:01:18.834Z] Dispatching getEmojiCategories
[stdout] [EMOJI_DB][2025-12-06T10:01:18.834Z] getEmojiCategories completed in 628ms
[stdout] [2025-12-06T10:01:18.835Z] [EMOJI_DB] Worker 1 handling getEmojiCategories
[stdout] [2025-12-06T10:01:18.835Z] [EMOJI_DB] Worker 1 completed getEmojiCategories in 0ms
[stdout] [EMOJI_DB][2025-12-06T10:01:18.836Z] Dispatching fetchImageFromDB
[stdout] [EMOJI_DB][2025-12-06T10:01:18.836Z] getEmojiBySlug completed in 630ms
[stdout] [EMOJI_DB][2025-12-06T10:01:18.836Z] Dispatching getEmojisByCategoryWithDiscordImagesPaginated
[stdout] [EMOJI_DB][2025-12-06T10:01:18.837Z] getEmojiBySlug completed in 631ms
[stdout] [EMOJI_DB][2025-12-06T10:01:18.837Z] Dispatching getEmojiImages
[stdout] [EMOJI_DB][2025-12-06T10:01:18.837Z] getEmojiBySlug completed in 631ms
[stdout] [EMOJI_DB]2025-12-06T10:01:
```

once this max listner thing is hit
DB query time is exploding

shrijith - 3:36 PM
what is the WORKER_COUNT
how much is i t in this case
ok this 100 is per listener

lovestaco — 3:36 PM
2 worker per category
3 categories are running
2 instances of server running

shrijith — 3:36 PM
ok
2 instances - in separate cores - hopefully

lovestaco — 3:37 PM
yes have added affinity
cpu 1 - 4321
cpu 2 - 4322

chatgpt response
This warning is coming from **Node.js EventEmitter** system. It’s not a crash, it’s telling you something is probably wrong in your code design.

---

## **What the warning means**

```
MaxListenersExceededWarning: Possible EventTarget memory leak detected.
101 message listeners added to [Worker]. MaxListeners is 100.
```

### Translation in simple terms:

You have a **Worker thread** (Node.js Worker) where you're adding **"message" event listeners** again and again (101 times).
Normally, Node warns you when more than 100 listeners are attached to the same event, because that is usually a **bug that causes memory leaks**.

Example of what is happening conceptually:

```js
worker.on('message', () => {
  // handle message
});
```

If your code runs this inside a loop, or inside a request handler, or repeatedly, you’ll end up with 101 listeners → **memory leak detected**.

---

## **Where it’s coming from**

The trace says:

```
/dist/server/chunks/emojis-utils_BonZaL4u.mjs:756:12
at executeQuery (/dist/server/chunks/emojis-utils_BonZaL4u.mjs:736:10)
```

So likely inside `executeQuery()`, every time it runs, it creates a new worker and attaches a `.on("message")` listener without removing the old ones.

---

## **Why Node has max listeners**

Because if you do something like:

```js
setInterval(() => {
  worker.on('message', () => {});
}, 10);
```

Listeners keep piling up forever. Memory keeps growing. Eventually, process crashes.

---

## **Fix**

Instead of adding `.on()` every time, do ONE of these:

### **1. Move the event listener outside the repeated logic**

```js
// Only once
worker.on('message', handleMessage);

function executeQuery() {
  worker.postMessage('run');
}
```

### **2. Use `.once()` if you only want listener once per job**

```js
worker.once('message', (msg) => {
  console.log(msg);
});
```

### **3. Remove the listener after response**

```js
function handler(msg) {
  console.log(msg);
  worker.removeListener('message', handler);
}
worker.on('message', handler);
```

### **4. Increase limit (not fixing root cause, just hides warning)**

```js
worker.setMaxListeners(200);
```

**Not recommended** unless you really know what you're doing.

---

## **Conclusion**

You’re repeatedly registering event listeners on the same Worker instance.
Fix is to add listener once, or automatically remove it.

### **Root cause**

There’s a **loop** or repeated call around `executeQuery()` causing `.on("message")` to be attached many times.

---

If you want, paste the code around:

```
executeQuery()
worker.on('message'...)
```

and I’ll show exactly how to fix your case.

---

---

---

---

# Cursor plan.md

# Fix Worker Pool Event Listener Memory Leak

## Problem

Each `executeQuery()` call adds a new `message` listener to the worker (line 210), which is only removed after the response arrives (line 195). With high concurrency (2 workers × 2 server instances × 3 categories), listeners accumulate beyond the 100 limit, causing performance degradation.

## Solution

Replace per-query listeners with a single message handler per worker that routes responses to the correct promise resolver using a Map.

## Changes

### 1. Add pending queries Map structure

- Create a `Map<string, PendingQuery>` per worker to track in-flight queries
- `PendingQuery` interface: `{ resolve, reject, timeout, type, startTime }`
- Initialize Maps during worker creation

### 2. Set up single message handler during initialization

- In `initWorkers()`, after creating each worker, add a single `worker.on('message')` handler
- Handler routes responses to the correct promise based on `response.id`
- Remove the per-query listener registration from `executeQuery()`

### 3. Refactor `executeQuery()` function

- Register query in the worker's pending Map instead of adding a listener
- Update timeout handler to remove from Map and reject
- Remove the `worker.off()` call since we're not adding per-query listeners

### 4. Handle cleanup

- Update `cleanupWorkers()` to clear all pending Maps
- Ensure timeout handlers properly clean up Map entries

## Files to modify

- `db/emojis/emoji-worker-pool.ts` - Apply routing handler pattern
- `db/png_icons/png-worker-pool.ts` - Apply routing handler pattern
- `db/svg_icons/svg-worker-pool.ts` - Apply routing handler pattern

## Implementation details

- Each worker gets one persistent message listener (set during init)
- Query registration: add to Map with queryId as key
- Response handling: lookup queryId in Map, resolve/reject, remove from Map
- Timeout handling: remove from Map before rejecting
- No need to increase `setMaxListeners()` beyond default since we'll only have 1 listener per worker
