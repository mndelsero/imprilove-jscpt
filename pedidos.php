<?php
echo '<pre>';
print_r($_POST);
echo '</pre>';
$cantidad = $_POST['cantidad'];
$sizes = $_POST['sizes'];
$comentario_correo = 'Un cliente ha solicitado algo..';
if(isset($_POST['comentarios']) AND $_POST['comentarios'] != ''){
    $comentario_correo .= ' y además ha dejado estos comentarios: '.$_POST['comentarios'];
}
if(isset($_POST['cantidad'])){
    if(sendgridProducto){
        header('Location: index.html?error=falso');
     }else{
         header('Location: index.html?error=true');
     }
}else{
    if(sendgridContacto){
        header('Location: index.html?error=falso');
     }else{
         header('Location: index.html?error=true');
     }    
}


?>