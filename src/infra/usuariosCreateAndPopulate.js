import database from "./bd.js";

database.connection.connect();

database.connection.query(
  "CREATE TABLE `test`.`usuarios` (`idusuarios` INT NULL,`nome` VARCHAR(45) NULL,`email` VARCHAR(45) NULL,PRIMARY KEY(`idusuarios`));",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("tabela usuarios criada com sucesso");
    }
  }
);
database.connection.query(
    "INSERT INTO usuarios (idusuarios, nome, email) VALUES ( 1, 'Jack Tenrec' , 'Jack@gmail.com' ), ( 2, 'Hannah Dundee' , 'hanna@yahoo.com' ) , ( 3, 'Mustapha Cairo' , 'Mustapha@gmail.com' );",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela usuarios populada com sucesso");
      }
    }
  );

database.connection.end();
