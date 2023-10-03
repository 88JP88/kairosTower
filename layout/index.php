<?php
require_once 'env/option.php';
$opt=new env_option();
$opt1=$opt->envOption();

if($opt1=="1"){
echo "<H2>ESTE ES UN AMBIENTE LOCAL<H2>";
}
if($opt1=="2"){
  echo "<H2>ESTE ES UN AMBIENTE DE DESARROLLO<H2>";
}
if($opt1=="3"){
  echo "<H2>ESTE ES UN AMBIENTE DE PRUEBAS<H2>";
}


?>