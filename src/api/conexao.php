<?php

header('Access-Control-Allow-Origin: *');

$servidor = "localhost";
$usuario = "root";
$senha = "";
$nome_banco = "educativus_homo";

$conexao = mysqli_connect($servidor, $usuario, $senha, $nome_banco);
mysqli_set_charset($conexao, "utf8");

if (mysqli_connect_error()) {
  echo "Erro de conexao: " . mysqli_connect_error();
}
