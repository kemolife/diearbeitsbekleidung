<?php /* Smarty version Smarty-3.1.19, created on 2018-03-07 10:34:51
         compiled from "C:\xampp\htdocs\diearbeitsbekleidung\themes\classic\templates\errors\restricted-country.tpl" */ ?>
<?php /*%%SmartyHeaderCode:9643613755a9fb23b0a6fd8-55762181%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c6fb4d97fb8af2bffca6451a459b82aa81777df4' => 
    array (
      0 => 'C:\\xampp\\htdocs\\diearbeitsbekleidung\\themes\\classic\\templates\\errors\\restricted-country.tpl',
      1 => 1519649749,
      2 => 'file',
    ),
    '092292cb7710f227873098f4f8ba99f6a43ce7a6' => 
    array (
      0 => 'C:\\xampp\\htdocs\\diearbeitsbekleidung\\themes\\classic\\templates\\layouts\\layout-error.tpl',
      1 => 1519649749,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '9643613755a9fb23b0a6fd8-55762181',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'stylesheets' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_5a9fb23b0dcc04_43124832',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5a9fb23b0dcc04_43124832')) {function content_5a9fb23b0dcc04_43124832($_smarty_tpl) {?>
<!doctype html>
<html lang="">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    
      <title></title>
      <meta name="description" content="">
      <meta name="keywords" content="">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    
      <?php /*  Call merged included template "_partials/stylesheets.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("_partials/stylesheets.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array('stylesheets'=>$_smarty_tpl->tpl_vars['stylesheets']->value), 0, '10486136365a9fb237b23820-47830766');
content_5a9fb237b59328_51381433($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); 
/*  End of included template "_partials/stylesheets.tpl" */?>
    

  </head>

  <body>

    <div id="layout-error">
      

  <section id="main">

    
      <header class="page-header">
        <div class="logo"><img src="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['shop']->value['logo'], ENT_QUOTES, 'UTF-8');?>
" alt="logo"></div>
        
          <h1><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['shop']->value['name'], ENT_QUOTES, 'UTF-8');?>
</h1>
        
      </header>
    

    
      <section id="content" class="page-content page-restricted">
        
          <h2><?php echo smartyTranslate(array('s'=>'403 Forbidden','d'=>'Shop.Theme.Global'),$_smarty_tpl);?>
</h2>
          <p><?php echo smartyTranslate(array('s'=>'You cannot access this store from your country. We apologize for the inconvenience.','d'=>'Shop.Theme.Global'),$_smarty_tpl);?>
</p>
        
      </section>
    

    

    

  </section>


    </div>

  </body>

</html>
<?php }} ?>
