<?php

header('Access-Control-Allow-Origin: *');

$conn = new mysqli('localhost', 'root', '', 'educativus_homo');

if (mysqli_connect_error()) {
  echo "Error connecting to database " . mysqli_connect_error();
  exit();
} else {
  $email = $_POST['email'];
  $password = trim($_POST['password']);

  $password = md5($password);

  $sql_login = "SELECT email FROM usuario WHERE email = '$email' ";

  $resultado = mysqli_query($conn, $sql_login);
  $array = mysqli_fetch_array($resultado);

  if ($email == $array['email']) {
    echo '<script type="aplication/javascript">alert("um usuario com esse email já está cadastrado")</script>';
  } else {

    $sql = 'INSERT INTO usuario (email, user_password) VALUES (\'' . $email . '\',\'' . $password . '\');';
    $res = mysqli_query($conn, $sql);

    if ($res) {
      echo [`<script type="javascript">alert("Usuario cadastrado com sucesso!");</script>`];
    } else {
      echo `<script type="javascript">alert("Usuario não foi cadastrado!")</script>`;
    }
  }
  $conn->close();
}
