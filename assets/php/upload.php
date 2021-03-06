<?php 
// $db = new PDO('sqlite:../../assets/database/final-project.db');

// if (isset($_POST['userPost'])) {
//     $today = date("m.d.y"); 
//     $save_dir = "photo/".$_POST['photo_id'];
//     $countfiles = count($_FILES['photo']['name']);
//     $result;
        
//     $query = $db->prepare('INSERT INTO userMainComment (userMindPost, userLocationPost, dateTime)
//         VALUES (:userComment, :userLocation,  :dateTime)');

//     $result = $query->execute([
//         ':userComment' => $_POST['userComment'],
//         ':userLocation' => 'philadelphia, pa',
//         ':dateTime' => $today,
//     ]);

//     if ($result){
//         $query = $db ->prepare('SELECT MAX(userPostID) AS maxOrderID FROM userMainComment LIMIT 1');
//         $query->execute();
//         $lastPostID = $query->fetch(PDO::FETCH_ASSOC);

//         for($i=0; $i<$countfiles; $i++){
//             $filename = $_FILES['photo']['name'][$i];
//             $save_file_path ="../" .$save_dir . "/" . basename($_FILES['photo']['name'][$i]);
            
//             if(move_uploaded_file($_FILES['photo']['tmp_name'][$i],$save_file_path)){
//                 $query = $db ->prepare('INSERT INTO userActivity (userID_FK, userPostID_FK, picture) VALUES (:userID_FK, :userPostID_FK, :picture)');
//                 $insertTODataBase = $query->execute([
//                     ':userID_FK' => 1002,
//                     ':userPostID_FK' => $lastPostID['maxOrderID'],
//                     ':picture' => $save_file_path,
//                     ]);
//             };
//             if($insertTODataBase){
//                 echo '<script type="text/javascript">'; 
//                 echo 'alert("Thanks for post");'; 
//                 echo 'window.location.href = "../../";';
//                 echo '</script>';
//             }
//         }
//     }

// }
var_dump('atik');

?>
