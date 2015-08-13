//Static blocks
$collection = Mage::getResourceModel('cms/block_collection');
$collection->addFieldToFilter('identifier', 'home_bottom_text');
foreach ($collection as $block) {
    $block->delete();
}
$FooterLinks_enContent = <<<HTML
<ul class="footer-links">
      <li>
        <ul>
          <li><h3>Customer Service</h3></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Hours</a></li>
          <li><a href="">FaQ</a></li>
          <li><a href="">Product Care</a></li>
        </ul>
      </li>
      <li>
        <ul>
          <li><h3>About Us</h3></li>
          <li><a href="">Our Store</a></li>
          <li><a href="">Our Mission</a></li>
          <li><a href="">Our Staff</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">Affiliations</a></li>
        </ul>
      </li>
      <li>
        <ul>
          <li><h3>Policies</h3></li>
          <li><a href="">Returns</a></li>
          <li><a href="">Shipping</a></li>
          <li><a href="">International Shipping</a></li>
          <li><a href="">Payment</a></li>
          <li><a href="">Privacy</a></li>
        </ul>
      </li>
      <li>
        <ul>
          <li><h3>Account</h3></li>
          <li><a href="">My Account</a></li>
          <li><a href="">Favorites</a></li>
          <li><a href="">Order History</a></li>
        </ul>
      </li>
    </ul>
HTML;

$oceania_b = <<<HTML
<img src="{{skin url="images/home/oceania_02.jpg"}}”>
HTML;

$asia_b = <<<HTML
<img src="{{skin url="images/home/asia_02.jpg"}}”>
HTML;

$africa_b = <<<HTML
<img src="{{skin url="images/home/oceania_02.jpg"}}”>
HTML

$cmsBlocks = array(
    array(
        'title'         => 'Footer links',
        'identifier'    => 'footer_links',
        'content'       => $FooterLinks_Content,
        'is_active'     => 1,
        'stores'        => 0
    ),
    array(
        'title'         => 'Oceania banner',
        'identifier'    => 'oceania_b',
        'content'       => $oceania_b,
        'is_active'     => 1,
        'stores'        => 0
    ),
    array(
        'title'         => 'Asia banner',
        'identifier'    => 'asia_b',
        'content'       => $asia_b,
        'is_active'     => 1,
        'stores'        => 0
    ),
    array(
        'title'         => 'Africa banner',
        'identifier'    => 'africa_b',
        'content'       => $africa_b,
        'is_active'     => 1,
        'stores'        => 0
    ),

);

foreach ($cmsBlocks as $data) {
    $block = Mage::getModel('cms/block')->load($data['identifier']);
    $staticBlock = Mage::getModel('cms/block')->setData($data);
    $staticBlock->save();
}

// CMS Pages

/**
 * ========== Homepage static ===========
 */
 
$page = Mage::getModel('cms/page');
$page->load('home');
if (!$page->getId()) {
    $page->setIdentifier('home');
}
$page->setTitle('Antique & Vintage Jewelry');
$page->setIsActive(1);
$page->setStores(array(0));
$page->setRootTemplate('two_columns_left_bar');

$content    = <<<HTML
{{block type="core/template" template="page/html/homepage.phtml"}}
HTML;

$page->setContent($content);
$page->save();


/**
 * ========== Admin data variables ===========
 */
 
$installer = $this;
$installer->setConfigData('general/store_information/name', 'Lang Antiques');
$installer->setConfigData('general/store_information/address', '309 Sutter St. San Francisco');
$installer->setConfigData('general/store_information/phone', '(800) 924 - 2213');
$installer->setConfigData('design/footer/copyright', '&copy; 2001-2015 Lang Antiques, All Rights Reserved.');
$installer->setConfigData('design/header/logo_src', 'images/header/logo_big.png');
//$installer->setConfigData('VAR', 'VAL');

