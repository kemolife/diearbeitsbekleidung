<?php /* Smarty version Smarty-3.1.19, created on 2018-03-07 10:34:43
         compiled from "C:\xampp\htdocs\diearbeitsbekleidung\admin\themes\default\template\helpers\tree\tree_header.tpl" */ ?>
<?php /*%%SmartyHeaderCode:10687585505a9fb233d97b89-08729777%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '8a7da15b5cf95cd6555f8e3cd608c821fcabccf6' => 
    array (
      0 => 'C:\\xampp\\htdocs\\diearbeitsbekleidung\\admin\\themes\\default\\template\\helpers\\tree\\tree_header.tpl',
      1 => 1519649749,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10687585505a9fb233d97b89-08729777',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'title' => 0,
    'toolbar' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_5a9fb233daac81_80184508',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5a9fb233daac81_80184508')) {function content_5a9fb233daac81_80184508($_smarty_tpl) {?>
<div class="tree-panel-heading-controls clearfix">
	<?php if (isset($_smarty_tpl->tpl_vars['title']->value)) {?><i class="icon-tag"></i>&nbsp;<?php echo smartyTranslate(array('s'=>$_smarty_tpl->tpl_vars['title']->value),$_smarty_tpl);?>
<?php }?>
	<?php if (isset($_smarty_tpl->tpl_vars['toolbar']->value)) {?><?php echo $_smarty_tpl->tpl_vars['toolbar']->value;?>
<?php }?>
</div>
<?php }} ?>
