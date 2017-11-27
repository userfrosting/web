---
title: Can I integrate this with my existing scripts?
---

Sort of.  Actually, you will integrate _your_ existing PHP scripts into a new UserFrosting installation, by implementing a custom Sprinkle.  The Sprinkle system helps you keep your code completely separate from the core UserFrosting codebase.  This makes it easy to upgrade when a new version of UserFrosting comes out.  And, since UserFrosting builds on well-known and widely supported components like Slim, Twig, and Eloquent, much of your code will still be usable even if you decide to move away from UserFrosting in the future.
