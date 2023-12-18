<?php 
                session_start();
                include("clientParams.php");
                $_SESSION["clientNames"]=$clientName;
                require ("../view/viewIndex.php"); ?>