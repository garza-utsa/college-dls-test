# Galen Sample Tests for College DLS
=====================================

Using the [Galen Framework](http://galenframework.com) [sample tests](https://github.com/galenframework/galen-sample-tests) as a base for creating a visual testing frame work for the [College DLS](https://github.com/utsa-asc/college-dls).

Highly recommended to use the included .devcontainer setup (Use the ```Open in container``` feature of VS Code) to get your development environment setup, Galen requires the following:

- Java (Java8 container is included)
- NPM (NodeJS)
    - gulp
    - gulp-galen
    - galenframework

Use the included ```npm start``` to run the automated testing framework.

For more information on the gspec specification, please see this [tutorial](https://tinnedfruit.com/writing/why-and-how-to-test-your-pattern-library-2.html)

If you want to call galen directly via java, use:

```
galen test tests/ --htmlreport reports
```
