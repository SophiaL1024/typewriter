const sentence = "hello there from lighthouse labs";
for (const i in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if(i===sentence.length-1){
      process.stdout.write('\n');
    }
  }, 50 * i);
}

