<?php /*%%SmartyHeaderCode:193435a9ff4d0916d12-85937740%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
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
  'nocache_hash' => '193435a9ff4d0916d12-85937740',
  'variables' => 
  array (
    'urls' => 0,
    'my_account_urls' => 0,
    'my_account_url' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_5a9ff4d09bba23_58561390',
  'cache_lifetime' => 31536000,
),true); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5a9ff4d09bba23_58561390')) {function content_5a9ff4d09bba23_58561390($_smarty_tpl) {?>
<div id="block_myaccount_infos" class="col-md-2 links wrapper">
  <h3 class="myaccount-title hidden-sm-down">
    <a class="text-uppercase" href="http://localhost:8080/diearbeitsbekleidung/ru/my-account" rel="nofollow">
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
          <a href="http://localhost:8080/diearbeitsbekleidung/ru/identity" title="Личные данные" rel="nofollow">
            Личные данные
          </a>
        </li>
            <li>
          <a href="http://localhost:8080/diearbeitsbekleidung/ru/order-history" title="Заказы" rel="nofollow">
            Заказы
          </a>
        </li>
            <li>
          <a href="http://localhost:8080/diearbeitsbekleidung/ru/credit-slip" title="Кредитные квитанции" rel="nofollow">
            Кредитные квитанции
          </a>
        </li>
            <li>
          <a href="http://localhost:8080/diearbeitsbekleidung/ru/addresses" title="Адреса" rel="nofollow">
            Адреса
          </a>
        </li>
        
	</ul>
</div>
<?php }} ?>
