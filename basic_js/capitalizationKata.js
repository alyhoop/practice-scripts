function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1, word.length)
}

Test.assertSimilar(capitalizeWord('word'), 'Word');
Test.assertSimilar(capitalizeWord('i'), 'I');
Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');
