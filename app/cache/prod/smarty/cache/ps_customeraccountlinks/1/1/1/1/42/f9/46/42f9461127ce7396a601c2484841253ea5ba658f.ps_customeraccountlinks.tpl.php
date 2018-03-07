<?php /*%%SmartyHeaderCode:7295611235a9fbfb66c3292-52612847%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '42f9461127ce7396a601c2484841253ea5ba658f' => 
    array (
      0 => 'module:ps_customeraccountlinks/ps_customeraccountlinks.tpl',
      1 => 1519649749,
      2 => 'module',
    ),
  ),
  'nocache_hash' => '7295611235a9fbfb66c3292-52612847',
  'variables' => 
  array (
    'urls' => 0,
    'my_account_urls' => 0,
    'my_account_url' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_5a9fbfb67610d0_07385662',
  'cache_lifetime' => 31536000,
),true); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5a9fbfb67610d0_07385662')) {function content_5a9fbfb67610d0_07385662($_smarty_tpl) {?>
<div id="block_myaccount_infos" class="col-md-2 links wrapper">
  <h3 class="myaccount-title hidden-sm-down">
    <a class="text-uppercase" href="http://diearbeitsbekleidung.local/index.php?controller=my-account" rel="nofollow">
      Your account
    </a>
  </h3>
  <div class="title clearfix hidden-md-up" data-target="#footer_account_list" data-toggle="collapse">
    <span class="h3">Your account</span>
    <span class="float-xs-right">
      <span class="navbar-toggler collapse-icons">
        <i class="material-icons add">&#xE313;</i>
        <i class="material-icons remove">&#xE316;</i>
      </span>
    </span>
  </div>
  <ul class="account-list collapse" id="footer_account_list">
            <li>
          <a href="http://diearbeitsbekleidung.local/index.php?controller=identity" title="Личные данные" rel="nofollow">
            Личные данные
          </a>
        </li>
            <li>
          <a href="http://diearbeitsbekleidung.local/index.php?controller=history" title="Заказы" rel="nofollow">
            Заказы
          </a>
        </li>
            <li>
          <a href="http://diearbeitsbekleidung.local/index.php?controller=order-slip" title="Кредитные квитанции" rel="nofollow">
            Кредитные квитанции
          </a>
        </li>
            <li>
          <a href="http://diearbeitsbekleidung.local/index.php?controller=addresses" title="Адреса" rel="nofollow">
            Адреса
          </a>
        </li>
        
	</ul>
</div>
<?php }} ?>
