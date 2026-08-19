# Aspen 🌲

Aspen is a programming language I'm building from scratch.

The main idea is pretty simple: I want a language that is easy to read and learn, but still has enough power to eventually build real software with it.

Aspen is currently at **0.5.0** and is still under development.

## What is Aspen?

Aspen is a general-purpose programming language.

I'm building the language myself instead of putting a bunch of existing language components together. The lexer, parser, runtime, compiler and other parts are being developed as part of the project.

The long-term goal is for Aspen to become a real compiled language capable of producing native programs.

## A tiny example

Aspen programs use the `.apf` extension.

```aspen
start {
    write("Hello, world!");
}
