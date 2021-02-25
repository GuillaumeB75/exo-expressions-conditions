/*let password = '1a2b!AZEAZEAZEAZEAZEAZEAZ'                            // fait RESULTAT PLUS BAS
const crackme6 = (password) => {
  if (password[0] === '1') {
    if (password[1] === 'a') {
      if (password[2] === '2') {
        if (password[3] === 'b') {
          if (password[4] === '!' && password.length > 13) {
            console.log('OK')
          } else {
            console.log('BAD')
          }
        } else {
          console.log('BAD')
        }
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}

crackme6(password)*/

let password = '1a2b!AZEAZEAZEAZEAZEAZEAZ'
const crackme6 = (password)
if (password[0] === '1' && password[1] === 'a' && password[2] === '2' && password[3] === 'b' && password[4] === '!' && password[5] === 'A' && password[6] === 'Z' && password[7] === 'E' && password[8] === 'A' && password[9] === 'Z' && password[10] === 'E' && password[11] === 'A' && password[12] === 'Z' && password[13] === 'E' && password[14] === 'A' && password[15] === 'Z' && password[16] === 'E' && password[17] === 'A' && password[18] === 'Z' && password[19] === 'E' && password[20] === 'A' && password[21] === 'Z' && password[22] === 'E' && password[23] === 'A' && password[24] === 'Z') {
  console.log('Ok: good password')
} else {
  console.log('Bad: bad password')
}