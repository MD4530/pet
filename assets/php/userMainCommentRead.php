
<?php
$db = new PDO('sqlite:../../assets/database/final-project.db');
    $query = $db->prepare('SELECT * FROM userMainComment ORDER BY userPostID DESC');

     $query->execute();
     $items= $query->fetchAll(PDO::FETCH_ASSOC);
     
     header('Content-Type: application/json');
     print json_encode($items);
?>


