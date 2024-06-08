<?php

class model_domain {



function domainGateway() {
    
    require_once 'option.php';
    $sub_domaincon = new env_option();
    $sub_domain = $sub_domaincon->envOption();
    $option=$sub_domain;

    if($option==1){//localhost
        $sub_domain="http://localhost";
        return $sub_domain;

    }
    if($option==2){//desarrollo
 $sub_domain="https://dev-gateway.lugma.network"; // o dirección IP del servidor de la base de datos remota
 return $sub_domain;

    }
    if($option==3){//pruebas-staging
        $sub_domain="https://staging-kairosgateway.lugma.tech";
        return $sub_domain;
    }
    if($option==4){//ptoducción

        $sub_domain="https://kairosgateway.lugma.tech";
        return $sub_domain;
    }
   //$sub_domain="https://dev-lugmacore.lugma.tech"; // o dirección IP del servidor de la base de datos remota
   
}

function domCore() {

    //opcion de subdominio

   require_once 'option.php';
   $sub_domaincon = new env_option();
   $sub_domain = $sub_domaincon->envOption();
   $option=$sub_domain;
   if($option==1){//localhost
       $sub_domain="http://localhost";
       return $sub_domain;

   }
   if($option==2){//desarrollo
$sub_domain="https://dev-lugmagateway.lugma.tech"; // o dirección IP del servidor de la base de datos remota
return $sub_domain;

   }
   if($option==3){//pruebas-staging
       $sub_domain="https://staging-lugmagateway.lugma.tech";
       return $sub_domain;
   }
   if($option==4){//ptoducción

       $sub_domain="https://lugmagateway.lugma.tech";
       return $sub_domain;
   }
  //$sub_domain="https://dev-lugmacore.lugma.tech"; // o dirección IP del servidor de la base de datos remota
  
}
}

?>