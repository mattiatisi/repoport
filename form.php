<?php

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');





if(isset($_POST['submit'])){

  $mailto = "mattia.tisi98@gmail.com";  //My email address
  //getting customer data
  $name = $_POST['name']; //getting customer name
  $email = $_POST['email']; //getting customer email
  $message = $_POST['message']; //getting subject line from client

  $text = mail($mailto, $email, $name, $message)

}






?>
