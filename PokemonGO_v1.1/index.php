<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
  <title>PokemonGO</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <?php 
  if (isset($_GET['page'])!=true){
     $_GET['page']=1;
 }
include ('Content.php');
 ?>
 </head>
<body class="<?php echo Content::getBodyStyle($_GET['page']);?>">
<?php echo Content::getMenu($_GET['page']); echo Content::getPage($_GET['page']);?>
</body>
</html>