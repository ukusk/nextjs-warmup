# Next.js Warm-up

Väike Next.js (App Router) harjutus: kaks lehte, loendur ja API endpoint.

## Käivitamine

```bash
npm install
npm run dev
```

Ava http://localhost:3000

- `/` avaleht koos loenduri (suurendamine ja nullimine) ja serveri sõnumi nupuga
- `/about` lühike tutvustus
- `/api/message` API endpoint, mis tagastab JSON-i

## Mida ma õppisin

1. **Mida Next.js annab lisaks Reactile?**
   Next.js lisab failipõhise routingu (App Router), serveripoolse renderdamise ja Server Componendid ning API endpointid (Route Handlers), nii et frontend ja backend saavad olla ühes projektis.

2. **Miks loendur vajab `'use client'`?**
   `useState` ja `onClick` töötavad ainult brauseris, aga App Routeris on komponendid vaikimisi Server Componendid. `'use client'` märgib, et see komponent saadetakse brauserisse ja muudetakse seal interaktiivseks.

3. **Kus jookseb `app/api/message/route.js` kood?**
   Serveris, Next.js-i Node.js protsessis, mitte kasutaja brauseris. Brauser saab ainult JSON-vastuse.

4. **Mille poolest sarnaneb see endpoint Expressi route'iga?**
   Mõlemad seovad URL-i ja HTTP-meetodi funktsiooniga, mis tagastab vastuse. Expressis on see `app.get("/api/message", ...)` ja `res.json()`, Next.js-is fail `app/api/message/route.js`, mis ekspordib `GET` funktsiooni ja tagastab `Response.json()`.

5. **Miks peavad saladused jääma serverisse?**
   Kõik, mis jõuab brauserisse, on kasutajale DevToolsis nähtav. API võtmed ja andmebaasi paroolid peavad olema ainult serveri koodis ja keskkonnamuutujates, muidu saab igaüks neid kasutada.