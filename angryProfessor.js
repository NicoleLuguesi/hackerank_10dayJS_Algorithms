function angryProfessor(minStudents, arrivalTimes) {
  arrivalTimes = arrivalTimes.filter((time) => time <= 0);
  if (arrivalTimes.length >= minStudents) {
    return 'NO';
  } else {
    return 'YES';
  }
}
console.log(angryProfessor(3, [-1, 3, 2, 0, 0]));

// test
