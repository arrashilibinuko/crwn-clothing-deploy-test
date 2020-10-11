function* generatorTest(i) {
    yield i + 1;
    yield i + 3
}



console.log(generatorTest(10).next())