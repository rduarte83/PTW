<?php
	header('content-type: application/json; charset=utf-8');

    $json = $_REQUEST["json"];

    try{    
        if(isset($json)){
            
            $data = json_decode($json);
            
            $user = $data->user;
            $nome = $data->nome;
            $pass = $data->pass;
            $idade = $data->idade;
            $cat = $data->cat;
        
            $pdo = new PDO('mysql:host=estga-dev.clients.ua.pt;port=3306;dbname=ptw;charset=utf8', 'ptw', 'ptw');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
            $q = ("UPDATE Utilizadores SET utlizador = '" . $user . "', nome = '" . $nome . "', password = '" . $pass . "', idade = '" . $idade . "', categoria = '" . $cat . "' where utilizador like '" . $user . "'");
            
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
