<?php


   function login(){

      $user = 'Yossi';
      $password = 'HulaHoop';
      $db = 'HulaHoopDB';
      $host = 'localhost';
      $port = 8889;

      $link = mysqli_init();
      $success = mysqli_real_connect(
         $link, 
         $host, 2+
          
         $user, 
         $password, 
         $db,
         $port
      );
      
      echo "Connection successfully\n";
