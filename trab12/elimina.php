<?php

	header('content-type: application/json; charset=utf-8');

    try{
	
	   $user = $_REQUEST["user"];
	
	   if(isset($user)){
           
           $pdo = new PDO('mysql:host=estga-dev.clients.ua.pt;port=3306;dbname=ptw;charset=utf8', 'ptw', 'ptw');
           $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
       
           $q = "DELETE FROM Utilizadores WHERE utilizador LIKE '" . $user . "'";
       
           $res = $pdo->prepare($q);
           
           $res->execute();
           $res->rowCount();
           $pdo = null;
       }
    }
    catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }


?>