# Hash Tables

The Hash Tables lesson has two related myGA modules. The first module introduces the concept of hash tables through an analogy, in an easy-to-understand way, while the second module gets into more of the technical, nitty-gritty parts of hash tables.

## Learning Objectives

By the end of this lesson, you'll be able to:

- Define hash functions and hash tables.
- Articulate the benefits of hash tables as they relate to speed of data access.
- Define collisions and how to resolve them.

## Prerequisites

- Big O Notation
- myGA Module 1: Introduction to Hash Tables
- myGA Module 2: Hash Tables Deep Dive

## Additional Resources

- Handy visualizations for a [closed addressing hash table](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html) and an [open addressing hash table](https://www.cs.usfca.edu/~galles/visualization/ClosedHash.html).
- Twenty fun interview questions, all related to [various hashing techniques](https://www.geeksforgeeks.org/top-20-hashing-technique-based-interview-questions/).

# .

# Deliverables

## One Paragraph Explanation of Hash Tables

Hash tables are used to store key-value pairs. They are like arrays, but the keys are not ordered. Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values. A good hash should be fast, distribute keys uniformly, and be deterministic.

Hash tables solve the basic problem of how to rapidly locate a unique key within memory.  The hash function turns a messy input (the key) into an orderly output (the index) to be stored in the hash table.  They're why finding an object property value by its key can be so fast.

## Two examples of Hash Tables

`- Objects in Python or JS`

`- Spell-checkers`

## One paragraph explaining what kinds of problems hash tables can solve

We’ve been using hash tables for the last 12 weeks, whether we knew it or not. They are the underlying structure of both Javascript objects and Python dictionaries — the primary difference between what we’ve been using and the hash table scaffold being that hash table keys must be integers instead of strings. It’s difficult to pin down any particular sort of question that they can be used to solve, since the scope of their use is, essentially, anything where you want to be able to store and manipulate large amounts of information reliably and quickly.

You could say the broadest purpose of the hash table is to simply store keys and values, in a way that they can be rapidly accessed and modified.  However, they appear to have variety of uses, including checking for the existence of certain values in a dataset, e.g. a spellchecker, or checking whether a given array is a subset of another.

## Links to Resources

- [Hash Tables, Colt Steele](https://cs.slides.com/colt_steele/hash-tables#/2/0/2)
- [Why Should the length of your has table be prime?](https://medium.com/swlh/why-should-the-length-of-your-hash-table-be-a-prime-number-760ec65a75d1)

https://www.geeksforgeeks.org/hashing-data-structure/

https://www.freecodecamp.org/news/hash-tables/

https://www.cs.usfca.edu/~galles/visualization/ClosedHashBucket.html

https://www.cs.usfca.edu/~galles/visualization/ClosedHash.html
