# To do App

## Chapter one

> Eigen oplossing

```PS
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-cursus> pnpm create vite todo --template react-swc
.../19993b32466-8                        |   +1 +
.../19993b32466-8                        | Progress: resolved 1, reused 1, downloaded 0, added 1, done
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with pnpm and start now?
│  No
│
◇  Scaffolding project in D:\DATA\GIT\FRONTENDWEB\frontendweb-cursus\todo...
│
└  Done. Now run:

  cd todo
  pnpm install
  pnpm dev

PS D:\DATA\GIT\FRONTENDWEB\frontendweb-cursus> cd todo
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-cursus\todo> pnpm install
! The local project doesn't define a 'packageManager' field. Corepack will now add one referencing pnpm@10.17.0+sha512.fce8a3dd29a4ed2ec566fb53efbb04d8c44a0f05bc6f24a73046910fb9c3ce7afa35a0980500668fa3573345bd644644fa98338fa168235c80f4aa17aa17fbef.
! For more details about this field, consult the documentation at https://nodejs.org/api/packages.html#packagemanager


   ╭───────────────────────────────────────────────╮
   │                                               │
   │     Update available! 10.17.0 → 10.17.1.      │
   │     Changelog: https://pnpm.io/v/10.17.1      │
   │   To update, run: corepack use pnpm@10.17.1   │
   │                                               │
   ╰───────────────────────────────────────────────╯

Packages: +113
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 168, reused 108, downloaded 5, added 113, done

dependencies:
+ react 19.1.1
+ react-dom 19.1.1

devDependencies:
+ @eslint/js 9.36.0
+ @types/react 19.1.15
+ @types/react-dom 19.1.9
+ @vitejs/plugin-react-swc 4.1.0
+ eslint 9.36.0
+ eslint-plugin-react-hooks 5.2.0
+ eslint-plugin-react-refresh 0.4.22
+ globals 16.4.0
+ vite 7.1.7

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: @swc/core, esbuild.                                               │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 2.5s using pnpm v10.17.0
```

```bash
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-cursus\todo> pnpm add -D @stylistic/eslint-plugin
Packages: +2
++
Progress: resolved 170, reused 115, downloaded 0, added 2, done

devDependencies:
+ @stylistic/eslint-plugin 5.4.0

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: @swc/core, esbuild.                                               │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 860ms using pnpm v10.17.0
```

```bash
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-cursus\todo> pnpm install tailwindcss @tailwindcss/vite
Packages: +31 -7
+++++++++++++++++++++++++++++++-------
Progress: resolved 214, reused 139, downloaded 0, added 31, done

dependencies:
+ @tailwindcss/vite 4.1.13
+ tailwindcss 4.1.13

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: @tailwindcss/oxide.                                               │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 1.1s using pnpm v10.17.0
```
