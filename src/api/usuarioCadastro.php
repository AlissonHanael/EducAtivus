<?php

require_once "conexao.php";

if (isset($_POST['btn_cadastrar'])) {

  $id_user = mysqli_escape_string($conexao, $_POST['id_user']);
  $email = mysqli_escape_string($conexao, $_POST['email']);
  $password = trim(mysqli_escape_string($conexao, $_POST['user_password']));

  $password = md5($password);

  $sql_email = "SELECT email FROM usuario WHERE email = '$email' ";

  $resultado = mysqli_query($conexao, $sql_email);
  $array = mysqli_fetch_array($resultado);

  if ($email == $array['email']) {
    header('Location: usuario-novo.php?existe');
  } else {


    $sql = "INSERT INTO usuario(email, password) VALUES(?, ?)";
    $tipos = "ss";
    $parametros = array($email, $password);

    $stmt = mysqli_prepare($conexao, $sql);

    if (!$stmt) {
      echo "Erro no cadastro do usuario: " . mysqli_error($conexao);
    }

    mysqli_stmt_bind_param($stmt, $tipos, ...$parametros);

    mysqli_stmt_execute($stmt);

    if (mysqli_stmt_error($stmt)) {
      header('Location: usuario-novo.php?erro');
    } else {
      if ($id_cliente > 0) {
        header('Location: usuario-novo.php?atualizacao');
      }
      header('Location: usuario-novo.php?sucesso');
    }
    mysqli_stmt_close($stmt);
  }
}
if (isset($_POST['deleta'])) {
  $id_usuario = mysqli_escape_string($conexao, $_POST['id_usuario']);
  $sql = "DELETE FROM usuario WHERE id_usuario = ? ";
  $stmt = mysqli_prepare($conexao, $sql);
  mysqli_stmt_bind_param($stmt, "i", $id_usuario);
  mysqli_stmt_execute($stmt);
  $erro = mysqli_stmt_error($stmt);
  mysqli_stmt_close($stmt);
  if ($erro)
    echo 0;
  else
    echo 1;
}
