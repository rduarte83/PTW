<?php
    header('content-type: application/json; charset=utf-8');

    try{    
        $pdo = new PDO('mysql:host=estga-dev.clients.ua.pt;port=3306;dbname=ptw;charset=utf8', 'ptw', 'ptw');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $q = "SELECT * FROM CatUtilizadores";
        
        $stmt = $pdo->prepare($q);
        $stmt->execute();
        $json['categorias'] = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($json);
    }
    catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$pdo = null;
?>