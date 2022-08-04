const bcrypt = require('bcrypt');

// const hashPassword = async (inputPassword) => {
//   const salt = await bcrypt.genSalt(12);
//   const hashedPassword = await bcrypt.hash(inputPassword, salt);
//   console.log(salt);
//   console.log(hashedPassword);
// };

//! salt round => 12 (recommended)

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
};

const login = async (pw, hahsedpw) => {
  const result = await bcrypt.compare(pw, hahsedpw);
  if (result) {
    console.log('Login Success');
  } else {
    console.log('Login Failed');
  }
};

hashPassword('tempPassword');

// login(
//   'tempPassword',
//   '$2b$12$hmeqOguwJy57ckM/Kq4XO.9H2JVvuA8HTe/LJ2PMAxAOO4Xd90kI6'
// );
