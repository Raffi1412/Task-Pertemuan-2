/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */

 const users = [
  {
    name  :"Raffi Pratama",
    age   : 20,
    major :"Software Engineer",
  },
  {
    name  :"Isfha",
    age   : 23,
    major :"English",
  },
  {
    name  :"Nurul",
    age   : 21,
    major :"Information System",
  },
  {
    name  :"Fulan bin Fulan",
    age   : 22,
    major :"Arabic",
  },
  {
    name  :"Putra",
    age   : 21,
    major :"Digital Business",
  }
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
 const all = () => {
  for(const all of users)
    console.log(all);
}

 /**
  * TODO 3
  * Buat function store: Menambahkan user baru.
  * Hint: Gunakan method push.
  * Note: Ubah function menggunakan arrow function.
  */
  const store = (newUser) => {
    users.push(newUser);
    console.log(users);
  }
 
 /**
  * TODO 4.
  * Buat function update: Mengedit data user.
  * Hint: re-assign array.
  * Note: Ubah function menggunakan arrow function.
  */
  const update = (editedIndex, editedUser) => {
    users[1] = editedUser;
    console.log(users);
  }

 /**
  * TODO 5.
  * Buat function destroy: Menghapus data user.
  * Hint: Gunakan method splice.
  * Note: Ubah function menggunakan arrow function.
  */
 const destroy = (deletedIndex) => {
   users.splice(2,1);
   console.log(users);
 }
 
 /**
  * Function main.
  * Jangan edit atau hapus function main.
  * Function ini untuk testing task.
  */
 
 const main = () => {
   /**
    * Test function index
    */
   console.log("# Get All Users");
   all();
 
   /**
    * Test function store
    */
   console.log("# Add New User: Sabiq");
   const newUser = {
     name: "Sabiq",
     age: 20,
     major: "Informatics",
   };
   store(newUser);
 
   /**
    * Test function update
    */
   console.log("# Edit User: Isfa");
   const editedIndex = 1;
   const editedUser = {
     name: "Isfhani Ghiyath",
     age: 23,
     major: "English",
   };
   update(editedIndex, editedUser);
 
   /**
    * Test function destroy
    */
   console.log("# Delete User: Nurul");
   const deletedIndex = 2;
   destroy(deletedIndex);
 };
 
 main();
 
 /**
  * Jangan hapus exports.
  * Exports ini untuk tujuan testing.
  */
 module.exports = { users, all, store, update, destroy };