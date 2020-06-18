// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCount = 0;
  let orangesCount = 0;

  for(let i=0; i<apples.length; i++){
      let totalapples = a + apples[i];
      if ( totalapples >= s && totalapples <= t) {
          ++applesCount 
      }
  } 
  for (let i=0; i<oranges.length; i++) {
      let totaloranges = b + oranges[i]
      if( totaloranges >= s && totaloranges <= t) {
          ++orangesCount
      }
  } 
 console.log(applesCount)
 console.log(orangesCount)     
}

console.log(applesCount)
 console.log(orangesCount) 

function main() {
  const st = readLine().split(' ');

  const s = parseInt(st[0], 10);

  const t = parseInt(st[1], 10);

  const ab = readLine().split(' ');

  const a = parseInt(ab[0], 10);

  const b = parseInt(ab[1], 10);

  const mn = readLine().split(' ');

  const m = parseInt(mn[0], 10);

  const n = parseInt(mn[1], 10);

  const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

  const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

  countApplesAndOranges(s, t, a, b, apples, oranges);
}
