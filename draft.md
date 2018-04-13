# Draft

This document contains draft content/ideas.

## Communication/Collaboration

- People work on problems together
- "Standing on the shoulders of giants"
- Save work by using what others have done already
- Examples: Wikipedia, Github
- Describe differences between the two
- Accessibility is important! The easier it is to use code that others produced, the more likely you are to use it. Additionally, this also shifts the decision whether to use a library or write code yourself. If it's really easy to use existing code, you will also use it for "small" problem that you would otherwise code yourself. Accessibility includes:
  - It is easy to find solutions that others have created (preferrably directly in the IDE)
  - solutions have to be easy to understand -> limited size, good documentation, ...
  - it is easy to contribute to / adapt other's solutions. 

## Units 

- Most applications calculate with numerics that don't have a "real-world" type associated with them
- Example: In excel 3€ + 5$ equals 8$
- it should be easy to work with meaningful units
- Examples: 
  - 1m + 10cm = 110cm or 1,1m
  - 6 l/100km < 10 mpg
  - ...
  
## Abstraction

- Most of the time, you don't care about all the little details. What's needed most of the time are useful abstrations that clearly show relevant information while hiding unimportant details.

## Discoverability

- What can this tool/library/... do?
- Can it do this particular thing?
- Search

## Connections/Relations

- In current software projects, it is often difficult to understand the high-level structure and how different parts of the system relate to each other. These connections are very important and should therefore be made visible.
- Important relations include the following:
  - Functions called by a function
  - Functions that call the current function
  - Side effects?
  - Parameters?
- To understand the structure on a higher level, the relationships between abstractions (modules, packages, libraries, ...) should also be made visible

## Implicit structure

- Instead of defining multiple structures / architectures (source files and directories, UML diagrams, actual code structure), just use relations between code unit (modules, classes, functions, etc.) to define the structure of the project.
- Restructuring becomes easier if there's only one structure to change (DRY principle kind of)
- Additionally, by using tools that focus on the relations between different parts, developers can maintain an overview of the system that helps keeping a clean architecture.
  
## Visible Choices

- If a variable may only contain a limited amount of values, let the use choose from the possible ones instead of letting him input anything and complaining during compilation/execution.
  
## Configuration for functions

- Having generic functions that take different options to decide what to do exactly (e.g. having a search function that can be configured to assume sorted input, different sorting implementations, how to access elements, ...)

## Documentation first

- Use documentation as an abstraction and make it visible. 
- Description of general function definition vs. description of function applied in specific context. e.g. for a sum function: "returns the sum of a list of integers" vs. "return total distance of all trips"

## Guided dependency upgrading

- Automatic update of backwards-incompatible changes by defining transformation rules (e.g. function a(...) in old version becomes function b(...) in new version).
- Manual review of added functionality. If a new version of a library implements functionality that has been implemented manually in own package, one can use the libraries version instead.

## ...
