<?php
ini_set('display_startup_errors', 1);
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
/*
Tested working with PHP5.4 and above (including PHP 7 )
 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['name','email'])->areRequired()->maxLength(50);
$validator->field('email')->isEmail();
$validator->field('message')->maxLength(6000);


$pp->attachFiles(['image']);


$pp->sendEmailTo('thebenjwheat@hotmail.com');

echo $pp->process($_POST);